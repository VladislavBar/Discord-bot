const { PREFIX } = require('../constants')

const commandHandler = (message) => {
  if (message.author.bot || !message.content.startsWith(PREFIX)) {
    return
  }

  const commandBody = message.content.slice(PREFIX.length)
  const args = commandBody.split(' ')
  const command = args.shift().toLowerCase()

  switch (command) {
    case 'ping':
      message.reply('Pong')
      break
    default:
      message.reply('Command not found! 🌚')
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
