const Discord = require('discord.js')
const config = require('./config/config.json')
const path = require('path')
const url = require('url')
const fs = require('fs')
const fetch = require('node-fetch')
const { getVideoDurationInSeconds } = require('get-video-duration')
// co;
//
// const youtubeMp3Converter = require("youtube-mp3-converter");
// const convertLinkToMp3 = youtubeMp3Converter(
//   path.join(__dirname, "temp", "mp3")
// );
// const downloadPath = path.join(__dirname, 'temp', 'mp3')
//
// const Downloader = require('./libs/downloader')
// const dl = new Downloader()
//
// const client = new Discord.Client()
//
// client
//   .login(config.BOT_TOKEN)
//   .then(() => console.log('Bot is connected!'))
//   .catch(() => console.log('Error! Bot is not connected! Maybe your internet connection is lost?'))
//
// client.on('message', async function (message) {
//   if (message.author.bot) return
//   if (!message.content.startsWith(config.PREFIX)) return
//   const commandBody = message.content.slice(config.PREFIX.length)
//   const args = commandBody.split(' ')
//   const command = args.shift().toLowerCase()
//   if (command === 'ping') {
//     message.reply('Pong')
//   }
//   if (command === 'download') {
//     const videoDuration = await getVideoDurationInSeconds(
//       'https://youtube.googleapis.com/youtube/v3/videos?part=id%2CcontentDetails&id=_dsIF2bZK_k&key=AIzaSyDzKX7EXCwCui-ac2qXc-D357f83tz5RB4'
//     )
//       .then((duration) => {
//         return duration
//       })
//       .catch((e) => console.log(e))

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
//
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
//
// channel
//   .send(exampleEmbed)
//   .then((msg) => {
//     setTimeout(() => msg.delete(), 10000)
//   })
//   .catch(() => console.log('Some kind of error'))
// })
