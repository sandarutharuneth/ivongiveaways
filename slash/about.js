const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'about',
    description: '📑 About IVON!',
    run: async (client, interaction) => {
    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
    .setLabel("Visit our Blog")
    .setStyle(ButtonStyle.Link)
    .setURL("https://blog.ivongiveaways.com")
    .setEmoji('1088468432523104397'),
        new ButtonBuilder()
        .setLabel('Patreon')
        .setStyle(ButtonStyle.Link)
        .setEmoji('981525828196257813')
        .setURL(`https://www.patreon.com/ivongiveaways`),
        new ButtonBuilder()
        .setLabel('Invite')
        .setStyle(ButtonStyle.Link)
        .setEmoji('984296691794583582')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands`),
    )
    let invite = new EmbedBuilder()
      .setAuthor({ 
          name: `About IVON`, 
          iconURL: client.user.displayAvatarURL() 
      })    
    .setDescription(`IVON is a Discord giveaway bot that allows you to host giveaways on your servers without the need for an extra pair of hands. Unique role requirements, server join requirements, special role points, and many more options are included to help you save time and effectively run your giveaway.`)
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail('https://i.imgur.com/sB02Hbz.png')
    .setImage('https://i.imgur.com/1TLIl08.png')    
    .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    })
    
    interaction.reply({ embeds: [invite], components: [row]});
}
}
