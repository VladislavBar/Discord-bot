const url = require('url')

const findYoutubeVideoId = (videoUrl) =>
  url
    .parse(videoUrl)
    .query.split('&')
    .filter((x) => x.startsWith('v='))[0]
    .split('=')[1]

module.exports = findYoutubeVideoId
