const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'invite',
    description: '➕ Invite IVON to your server!',
    run: async (client, interaction) => {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel(`Invite ${client.user.username}`)
        .setStyle('LINK')
      .setEmoji('973537545289875486')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands`),
      new MessageButton()
        .setLabel('Patreon')
        .setStyle('LINK')
        .setEmoji('981525828196257813')
        .setURL("https://www.patreon.com/projectrazer"),
      new MessageButton()
        .setLabel('Support')
        .setStyle('LINK')
        .setEmoji('971675354555121675')
        .setURL("https://discord.gg/7CQJvMYTrj"),
    )
    let invite = new MessageEmbed()
      .setAuthor({ 
          name: `Invite ${client.user.username}`, 
          iconURL: client.user.displayAvatarURL() 
      })    
    .setTitle("Invite & Support Link!")
    .setDescription(`Invite ${client.user} to your server today and host seamless giveaways in your server!`)
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail(process.env.THUMBNAIL)
    .setFooter({
        text: `©️ IVON`, 
        iconURL: (process.env.FOOTERIMG)
    })
    
    interaction.reply({ embeds: [invite], components: [row]});
}
}
