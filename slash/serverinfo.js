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
      .setDescription(`[Invite](https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands) | [Twitter](https://twitter.com/razerofficials) | [Patreon](https://www.patreon.com/projectrazer)`)
        .setAuthor(interaction.guild.name, interaction.guild.iconURL)
        .addField("Name", interaction.guild.name, true)
        .addField("Server ID", interaction.guild.id, true)
        .addField("Owner", `${(await interaction.client.users.fetch(interaction.guild.ownerId)).tag}`, true)
        .addField('Owner ID:', `${(await interaction.guild.ownerId)}`, true)
        .addField(`Members`, interaction.guild.memberCount.toString(), true)
        .addField(`Bots:`, interaction.guild.members.cache.filter(member => member.user.bot).size.toString(), true)
        .addField(`Non-Animated Emojis:`, interaction.guild.emojis.cache.size.toString(), true)
        .addField(`Animated Emojis:`,interaction.guild.emojis.cache.filter(emoji => emoji.animated).size.toString(),true )
        .addField(`Text Channels:`,interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size.toString(),true )
        .addField(`Voice Channels:`,interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size.toString(),true )
        .addField(`Roles:`, interaction.guild.roles.cache.size.toString(), true)
        .addField(`Created at`, `${moment(interaction.guild.createdTimestamp).format('LLL')} | \`${moment(interaction.guild.createdTimestamp).fromNow()}\``, true)
        .addField(`Boost Level`, interaction.guild.premiumTier.toString(), true)
        .addField(`Total Boosts`, interaction.guild.premiumSubscriptionCount.toString(), true)
        .setFooter({
        text: `©️ IVON`, 
        iconURL: (process.env.FOOTERIMG)
    })
    interaction.reply({embeds: [embed]});
  }
}