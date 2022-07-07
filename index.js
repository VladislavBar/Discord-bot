const Discord = require('discord.js')
const commandHandler = require('./src/commands')
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
const client = new Discord.Client()
console.log(process.env.BOT_TOKEN)
client
  .login(process.env.BOT_TOKEN)
  .then(() => console.log('Bot is connected!'))
  .catch(console.error)

client.on('message', (message) => {
  return commandHandler(message)
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

// channel
//   .send(exampleEmbed)
//   .then((msg) => {
//     setTimeout(() => msg.delete(), 10000)
//   })
//   .catch(() => console.log('Some kind of error'))
// })
