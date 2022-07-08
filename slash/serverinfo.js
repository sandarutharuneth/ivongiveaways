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
        .addField("<:edit:990607550208692244> Name", interaction.guild.name, true)
        .addField("<:server:990606574647140423> Server ID", interaction.guild.id, true)
        .addField("<:vip:990606565344182302> Owner", `${(await interaction.client.users.fetch(interaction.guild.ownerId)).tag}`, true)
        .addField('<:fingerprint:990611711352537118> Owner ID:', `${(await interaction.guild.ownerId)}`, true)
        .addField(`<:user:990606594192597022> Members`, interaction.guild.memberCount.toString(), true)
        .addField(`<:bot:990606610156122212> Bots:`, interaction.guild.members.cache.filter(member => member.user.bot).size.toString(), true)
        .addField(`<:boost:990601774438166609> Non-Animated Emojis:`, interaction.guild.emojis.cache.size.toString(), true)
        .addField(`<a:nitro:990601542463807528> Animated Emojis:`,interaction.guild.emojis.cache.filter(emoji => emoji.animated).size.toString(),true )
        .addField(`<:channel:990666581493284915> Text Channels:`,interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size.toString(),true )
        .addField(`<:voice:990666579182223431> Voice Channels:`,interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size.toString(),true )
        .addField(`<:quality:990614371401076747> Roles:`, interaction.guild.roles.cache.size.toString(), true)
        .addField(`<:calendar:990595051837063248> Created at`, `${moment(interaction.guild.createdTimestamp).format('LLL')} | \`${moment(interaction.guild.createdTimestamp).fromNow()}\``, true)
        .addField(`<:boost:984643370511118378> Boost Level`, interaction.guild.premiumTier.toString(), true)
        .addField(`<:gemstone1:990598822164037722> Total Boosts`, interaction.guild.premiumSubscriptionCount.toString(), true)
        .setFooter({
        text: `©️ IVON`, 
        iconURL: (process.env.FOOTERIMG)
    })
    interaction.reply({embeds: [embed]});
  }
}