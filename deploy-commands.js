const { SlashCommandBuilder } = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
require('dotenv').config()

const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
  new SlashCommandBuilder().setName('roma').setDescription('Just a secret!'),
  new SlashCommandBuilder().setName('ping-random').setDescription('Ping random server user!'),
  new SlashCommandBuilder()
    .setName('download')
    .setDescription('Download video as MP3!')
    .addStringOption((option) =>
      option.setName('url').setRequired(true).setDescription('URL of the video to download.')
    ),
].map((command) => command.toJSON())

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN)

console.log(process.env.CLIENT_ID)
rest
  .put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
