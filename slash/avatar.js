const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'Shows User Avatar',
  options: [{
    name: 'user',
    type: 'USER',
    description: 'Select a user',
    required: false,
  }],
  run: async (client, interaction) => {
    const user = interaction.options.getUser('user') || interaction.user

    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel(`Avatar URL`)
        .setStyle('LINK')
        .setURL(`${user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 })}`))

    const embed = new MessageEmbed()
      .setTitle(`${user.username}'s Avatar`)
      .setColor('#2F3136')
      .setFooter({ text: `Requested by: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
      .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
    interaction.reply({embeds: [embed], components: [row]});

  }
}
