const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'serverinfo',
  description: 'sends the serverinfo',
  run: async (client, interaction) => {
    const guild = client.guilds.resolve(interaction.guildId)
      const voicechannels = await guild.channels.cache.filter(
                (ch) => ch.type === ChannelType.GuildVoice
            ).size
const textchannels = await guild.channels.cache.filter(
                (ch) => ch.type === ChannelType.GuildText
            ).size

    let embed = new EmbedBuilder()
    .setTitle("**Server Information**")
        .setColor('#2F3136')
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
      .setDescription(`
      <:profile:1000770439406157904> **Name:** \`${interaction.guild.name}\`
      <:invi:1000459192555024404><:next:1000472400049209385> **Server ID:** ${interaction.guild.id}
      <:vip:990606565344182302> **Owner:** <@${(interaction.guild.ownerId)}>
      <:invi:1000459192555024404><:next:1000472400049209385> **Owner ID:** ${(await interaction.guild.ownerId)}\n
      <:birthday:1000469205520502935> **Created At: ** <t:${parseInt(interaction.guild.createdTimestamp / 1000)}:R>
      <:member:1000768159952949258> **Members:** \`${interaction.guild.memberCount}\`
      <:role:1000449831157907556> **Roles:** \`${interaction.guild.roles.cache.size}\`
      <:boost:990601774438166609> **Emojis:** \`${interaction.guild.emojis.cache.size}\`
      <a:nitro:990601542463807528> **Animated Emojis:** \`${interaction.guild.emojis.cache.filter(emoji => emoji.animated).size}\`
      <:channel:990666581493284915> **Text Channels:** \`${textchannels}\`
      <:voice:990666579182223431> **Voice Channels:** \`${voicechannels}\`\n\n
      **Boost Information**\n
      <:boosters:1000708963626668052> **Total Boosts:** \`${interaction.guild.premiumSubscriptionCount}\`
      <:boost:984643370511118378> **Boost Level:** \`${interaction.guild.premiumTier}\``)
        .setAuthor({ name: interaction.guild.name })
        .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    })
    interaction.reply({embeds: [embed]});
  }
}
