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

    case 'download':
      return require('../commands/download')(interaction)
    default:
      interaction.reply('Command not found! 🌚')
  }
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
