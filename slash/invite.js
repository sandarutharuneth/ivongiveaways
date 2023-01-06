const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'invite',
    description: '➕ Invite the bot to your server!',
    run: async (client, interaction) => {
    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setLabel(`Invite ${client.user.username}`)
        .setStyle(ButtonStyle.Link)
        .setEmoji('973537545289875486')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands`),
        new ButtonBuilder()
        .setLabel('Patreon')
        .setStyle(ButtonStyle.Link)
        .setEmoji('981525828196257813')
        .setURL("https://www.patreon.com/ivongiveaways"),
        new ButtonBuilder()
        .setLabel('Support')
        .setStyle(ButtonStyle.Link)
        .setEmoji('971675354555121675')
        .setURL("https://discord.gg/7CQJvMYTrj"),
    )
    let invite = new EmbedBuilder()
      .setAuthor({ 
          name: `Invite ${client.user.username}`, 
          iconURL: client.user.displayAvatarURL() 
      })    
    .setTitle("Invite & Support Link!")
    .setDescription(`I'm The Perfect Giveaway bot to host Giveaways easily on your server with multiple options, Including role requirements, bonus roles, bonus points and server joinings. Get started with IVON today!`)
    .setImage('https://i.imgur.com/1TLIl08.png')  
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail('https://i.imgur.com/sB02Hbz.png')
    .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    })
    
    interaction.reply({ embeds: [invite], components: [row]});
}
}
