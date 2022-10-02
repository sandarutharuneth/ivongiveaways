const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel(`Vote on Discord Bot List`)
        .setStyle('LINK')
        .setEmoji('974160940197113916')
        .setURL(``),//Your Bot list link
        
        
        //Unfortunately you cannot add your bot on top.gg unless you make significant changes on commands or making some new advanced commands to your bot code.
        //But you can add your bot on Discord bot list
        
        
        new MessageButton()
        .setLabel('Invite IVON')
        .setStyle('LINK')
        .setEmoji('973537545289875486')
        .setURL(``), //Your Invite link
    )
    let invite = new MessageEmbed()
     .setAuthor({ 
          name: `${client.user.username}`, 
          iconURL: client.user.displayAvatarURL() 
     })  
    .setTitle("Vote for **IVON**")
    .setDescription(`Vote for **${client.user}** on [discordbotlist.com](https://discordbotlist.com). Your siple vote help us to grow more and more.`)
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail(process.env.THUMBNAIL)
    .setImage(process.env.DCBL)
    .setFooter({
        text: `©️ IVON`, 
        iconURL: (process.env.FOOTERIMG)
    })
    message.reply({ embeds: [invite], components: [row]});
}
