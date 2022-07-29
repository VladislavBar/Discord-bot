const fs = require('fs')
const downloadYoutubeVideo = require('../utils/downloadYoutubeVideo')

// const { Client, VoiceChannel, Intents } = require('discord.js')
const {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  entersState,
  StreamType,
  AudioPlayerStatus,
  VoiceConnectionStatus,
} = require('@discordjs/voice')
const { makeURLSearchParams } = require('@discordjs/rest')

const play = async (interaction) => {
  await interaction.deferReply({ content: 'Preparing song...' })

  let downloadedFile
  try {
    downloadedFile = await downloadYoutubeVideo(interaction.options.getString('song'))
  } catch (e) {
    console.log(e)
    interaction.editReply({ content: 'Sorry! I can not play this video! 😢' })
    return
  }

  const connection = await connectToChannel(interaction.member?.voice.channel)
  const player = createAudioPlayer()
  const resource = createAudioResource(downloadedFile.file)

  connection.subscribe(player)
  player.play(resource)
  // player.on('buffering', () => {
  //   fs.unlinkSync(downloadedFile.file)
  //   connection.disconnect()
  // })

  player.on('stateChange', (oldState, newState) => {
    console.log(`State changed from ${oldState.status} to ${newState.status}`)
  })

  connection.on('error', console.log)
  player.on('error', console.log)

  return interaction.editReply({ content: `Now playing: ${downloadedFile.title}` })
}

const connectToChannel = async (channel) =>
  joinVoiceChannel({
    channelId: channel.id,
    guildId: channel.guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator,
  })

module.exports = play
