const { Client, Intents } = require('discord.js')
const commandHandler = require('./src/commands')
require('dotenv').config()
// import { getVideoDurationInSeconds } from 'get-video-duration'

// const youtubeMp3Converter = require("youtube-mp3-converter");
// const convertLinkToMp3 = youtubeMp3Converter(
//   path.join(__dirname, "temp", "mp3")
// );
// const downloadPath = path.join(__dirname, 'temp', 'mp3')
//
// const Downloader = require('./libs/downloader')
// const dl = new Downloader()
//
const intents = new Intents()
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS)
const client = new Client({ intents })
console.log(process.env.BOT_TOKEN)
client
  .login(process.env.BOT_TOKEN)
  .then(() => console.log('Bot is connected!'))
  .catch(console.error)

client.on('ready', () => {
  console.log('Bot is ready!')
  // setInterval(async () => {
  //   const guild = client.guilds.cache.get('784009587183058976')
  //   const members = await guild.members.fetch().then((members) => [...members].map(([id]) => id))
  //   const randomMessageIndex = Math.floor(Math.random() * members.length)
  // }, 10)
})

client.on('interactionCreate', (interaction) => {
  return commandHandler(interaction)
})
// client.on('typingStart', function (channel, user) {
//   const exampleEmbed = new Discord.MessageEmbed()
//     .setColor('#fff200')
//     .setTitle('Alert')
//     .setURL('https://discord.js.org/')
//     .setAuthor('FantomVD', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
//     .setDescription(`Big brother is watching! ${user}`)
//     .setThumbnail('https://i.imgur.com/wSTFkRM.png')
//     .setImage('https://i.imgur.com/wSTFkRM.png')
//     .setTimestamp()
//   //
//   channel
//     .send(exampleEmbed)
//     .then((msg) => {
//       setTimeout(() => msg.delete(), 10000)
//     })
//     .catch(() => console.log('Some kind of error'))
// })
