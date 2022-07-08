const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel(`Website`)
        .setStyle('LINK')
        .setEmoji('984296691794583582')
        .setURL(`https://ivon.netlify.app`),
      new MessageButton()
        .setLabel('Patreon')
        .setStyle('LINK')
        .setEmoji('981525828196257813')
        .setURL(`https://www.patreon.com/projectrazer`),
      new MessageButton()
        .setLabel('Invite')
        .setStyle('LINK')
        .setEmoji('966345633411768381')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands`),
    )
    let about = new MessageEmbed()
     .setAuthor({ 
          name: `About IVON`, 
          iconURL: client.user.displayAvatarURL() 
     })    
    .addField("Property of", "[Project Razer](https://github.com/razerinc)", true)
    .addField(
        "Partnered With",
        "[Astra Service](https://www.astra-services.xyz/)",
        true)
    .addField(
        "Hosted On",
        "[Digital Ocean](https://www.digitalocean.com/)",
        true)
    .setDescription(`IVON is a Discord giveaway bot that allows you to host giveaways on your servers without the need for an extra pair of hands. Unique role requirements, server join requirements, special role points, and many more options are included to help you save time and effectively run your giveaway.`)
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail(process.env.THUMBNAIL)
    .setImage('https://i.imgur.com/1TLIl08.png')    
    .setFooter({
        text: `©️ IVON`, 
        iconURL: (process.env.FOOTERIMG)
    })
    message.reply({ embeds: [about], components: [row]});
}