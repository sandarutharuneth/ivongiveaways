const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'servericon',
  description: 'sends the Server Icon',
  run: async (client, interaction) => {
    
const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setLabel(`Server Icon URL`)
        .setStyle(ButtonStyle.Link)
        .setURL(`${interaction.guild.iconURL()}?size=1024`))

    let embed = new EmbedBuilder()
    .setAuthor({ name: interaction.guild.name })
    .setImage(interaction.guild.iconURL({ dynamic: true, size: 1024 }))
    .setColor('#2F3136')
    .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    })
    interaction.reply({embeds: [embed], components: [row]});

  }
}
