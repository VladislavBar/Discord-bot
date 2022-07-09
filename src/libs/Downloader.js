const YoutubeMp3Downloader = require('youtube-mp3-downloader')
const path = require('path')
const fs = require('fs')

const Downloader = {}

const createTempDirectory = () => {
  const tempDir = path.join(process.cwd(), '/tmp/mp3')
  console.log(tempDir)
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true })
  }
}

const YD = new YoutubeMp3Downloader({
  ffmpegPath: '/usr/bin/ffmpeg', // FFmpeg binary location
  outputPath: path.join(process.cwd(), 'tmp', 'mp3'), // Output file location (default: the home directory)
  queueParallelism: 2, // Download parallelism (default: 1)
  progressTimeout: 2000, // Interval in ms for the progress reports (default: 1000)
  youtubeVideoQuality: 'lowest',
  allowWebm: false, // Interval in ms for the progress reports (default: 1000)
})

Downloader.YD = YD
Downloader.download = async (videoUrl) => {
  createTempDirectory()
  return new Promise((resolve, reject) => {
    Downloader.YD.download(videoUrl, undefined, (err, data) => {
      if (err) {
        reject(err)
      } else {
        console.log('Downloaded!', data)
        resolve(data)
      }
    })

    YD.on('error', (err) => {
      reject(err)
    })

    YD.on('finished', (err, data) => {
      resolve(data)
    })

    YD.on('progress', (progress) => {
      console.log(JSON.stringify(progress))
    })
  })
}

module.exports = Downloader
