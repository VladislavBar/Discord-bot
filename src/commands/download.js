const { MessageAttachment } = require('discord.js')
const fs = require('fs')
const downloadYoutubeVideo = require('../utils/downloadYoutubeVideo')

const download = async (interaction) => {
  await interaction.deferReply({ content: 'Downloading...', ephemeral: true })
  const videoUrl = interaction.options.getString('url')

  let downloadedFile
  try {
    downloadedFile = await downloadYoutubeVideo(videoUrl)
    const fileAttachment = new MessageAttachment(downloadedFile.file)
    return await interaction.editReply({ files: [fileAttachment], ephemeral: true })
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
