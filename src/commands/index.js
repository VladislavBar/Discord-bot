const commandHandler = async (interaction) => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction
  if (commandName === 'ping') {
    interaction.reply('pong')
  }

  switch (commandName) {
    case 'ping':
      interaction.reply('Pong')
      break
    case 'roma': {
      const replies = ['-_-', '🌚', 'summon <@524185471375638528>']
      const randomMessageIndex = Math.floor(Math.random() * replies.length)
      interaction.reply(replies[randomMessageIndex])
      break
    }
    case 'ping-random': {
      // const members = [...interaction.guild.members._cache].map(([id]) => id)
      const members = await interaction.guild.members
        .fetch()
        .then((members) => [...members].map(([id]) => id))
      const randomMessageIndex = Math.floor(Math.random() * members.length)
      await interaction.reply(`<@${members[randomMessageIndex]}>`)
      break
    }
    default:
      interaction.reply('Command not found! 🌚')
  }
  //   if (command === 'download') {
  //     const videoDuration = await getVideoDurationInSeconds(
  //       'https://youtube.googleapis.com/youtube/v3/videos?part=id%2CcontentDetails&id=_dsIF2bZK_k&key=AIzaSyDzKX7EXCwCui-ac2qXc-D357f83tz5RB4'
  //     )
  //       .then((duration) => {
  //         return duration
  //       })
  //       .catch((e) => console.log(e))
  //
  // console.log(videoDuration)
  // dl.getMP3({ videoId: videoId }, async function (err, res) {
  //   if (err) {
  //     await message.reply("Download was failed! =(");
  //     fs.unlinkSync(res.file);
  //     lenght:29782413,
  // } else {
  //   try {
  //     await message.reply(`Here is track "${res.videoTitle}"`, {
  //       files: [res.file],
  //     });
  //     await message.delete();
  //   } catch (e) {
  //     await message.reply("Download was failed! =(");
  //   } finally {
  //     fs.unlinkSync(res.file);
  //   }
  // }
  // });
  // }
  // if (command === 'info') {
  // }
  // })

  // function parseDurationString(str) {
  //   str = str.split(2)
  //   return {}
  // }
  //
  // function findYoutubeVideoId(videoUrl) {
  //   return url
  //     .parse(videoUrl)
  //     .query.split('&')
  //     .filter((x) => x.startsWith('v='))[0]
  //     .split('=')[1]
  // }
  //
  // client.on('typingStart', function (channel, user) {
  //   const exampleEmbed = new Discord.MessageEmbed()
  //     .setColor('#fff200')
  //     .setTitle('Alert')
  //     .setURL("https://discord.js.org/")
  // .setAuthor('FantomVD', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
  // .setDescription(`Big brother is watching! ${user}`)
  // .setThumbnail('https://i.imgur.com/wSTFkRM.png')
  // .setImage('https://i.imgur.com/wSTFkRM.png')
  // .setTimestamp()
}

module.exports = commandHandler
