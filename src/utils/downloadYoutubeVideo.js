const getYoutubeVideoId = require('./getYoutubeVideoId')
const Downloader = require('../libs/Downloader')

module.exports = (videoUrl) => {
  const videoId = getYoutubeVideoId(videoUrl)
  return Downloader.download(videoId)
}
