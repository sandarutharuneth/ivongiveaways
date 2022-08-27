const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'servericon',
  description: 'sends the Server Icon',
  run: async (client, interaction) => {
    
const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel(`Server Icon URL`)
        .setStyle('LINK')
        .setURL(`${interaction.guild.iconURL()}?size=1024`))

    let embed = new MessageEmbed()
    .setAuthor({ name: interaction.guild.name })
    .setImage(interaction.guild.iconURL({ dynamic: true, size: 512 }))
    .setColor('#2F3136')
    .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    })
    interaction.reply({embeds: [embed], components: [row]});

  }
}
