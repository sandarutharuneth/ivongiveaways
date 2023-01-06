const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'vote',
    description: '🗳 Vote for IVON!',
    run: async (client, interaction) => {
    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
          .setLabel('Vote on Top.gg')
        .setStyle(ButtonStyle.Link)
        .setEmoji('960895425567666246')
        .setURL(`https://top.gg/bot/973436715819745290/vote`),        
        new ButtonBuilder()
        .setLabel(`Vote on Discord Bot List`)
        .setStyle(ButtonStyle.Link)
        .setEmoji('974160940197113916')
        .setURL(`https://discordbotlist.com/bots/ivon`),
    )
    let invite = new EmbedBuilder()
      .setAuthor({ 
          name: `${client.user.username}`, 
          iconURL: client.user.displayAvatarURL() 
     })  
    .setTitle("Vote for **IVON**")
    .setDescription(`Vote for **${client.user}** on Top.gg and Discord Bot List. Your siple vote help us to grow more and more.`)
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail('https://i.imgur.com/sB02Hbz.png')
    .setImage('https://i.imgur.com/MjsBQBv.png')
    .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    })
    
    interaction.reply({ embeds: [invite], components: [row]});
}
}
