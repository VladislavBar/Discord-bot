const { MessageAttachment } = require('discord.js')
const fs = require('fs')

const Downloader = require('../libs/Downloader')
const getYoutubeVideoId = require('../utils/getYoutubeVideoId')

const download = async (interaction) => {
  await interaction.deferReply('Downloading...')
  const videoUrl = interaction.options.getString('url')
  const videoId = getYoutubeVideoId(videoUrl)

  let downloadedFile
  try {
    downloadedFile = await Downloader.download(videoId)
    const fileAttachment = new MessageAttachment(downloadedFile.file)
    return await interaction.editReply({ files: [fileAttachment] })
  } catch (e) {
    console.log(e)
  } finally {
    fs.unlinkSync(downloadedFile.file)
  }
}

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
//

module.exports = download
