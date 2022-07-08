const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'vote',
    description: '🗳 Vote for IVON!',
    run: async (client, interaction) => {
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel(`Vote on Discord Bot List`)
        .setStyle('LINK')
        .setEmoji('974160940197113916')
        .setURL(`https://discordbotlist.com/bots/ivon`),
        new MessageButton()
        .setLabel('Invite IVON')
        .setStyle('LINK')
        .setEmoji('973537545289875486')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands`),
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
    
    interaction.reply({ embeds: [invite], components: [row]});
}
}