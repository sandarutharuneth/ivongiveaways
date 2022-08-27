const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'serverinfo',
  description: 'sends the serverinfo',
  run: async (client, interaction) => {

    let embed = new Discord.MessageEmbed()
    .setTitle("**Server Information**")
        .setColor('#2F3136')
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
      .setDescription(`
      **Name:** \`${interaction.guild.name}\`
      **Server ID:** ${interaction.guild.id}
      **Owner:** <@${(interaction.guild.ownerId)}>
      **Owner ID:** ${(await interaction.guild.ownerId)}\n
      **Created At: ** <t:${parseInt(interaction.guild.createdTimestamp / 1000)}:R>
      **Members:** \`${interaction.guild.memberCount}\`
      **Roles:** \`${interaction.guild.roles.cache.size}\`
      **Emojis:** \`${interaction.guild.emojis.cache.size}\`
      **Animated Emojis:** \`${interaction.guild.emojis.cache.filter(emoji => emoji.animated).size}\`
      **Text Channels:** \`${interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size}\`
      **Voice Channels:** \`${interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size}\`\n\n
      **Boost Information**\n
      **Total Boosts:** \`${interaction.guild.premiumSubscriptionCount}\`
      **Boost Level:** \`${interaction.guild.premiumTier}\``)
        .setAuthor({ name: interaction.guild.name })
        .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    })
    interaction.reply({embeds: [embed]});
  }
}
