const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'servericon',
  description: 'sends the Server Icon',
  run: async (client, interaction) => {
    try {
      const iconURL = interaction.guild.iconURL({ dynamic: true, size: 1024 });

      if (!iconURL) {
        const errorEmbed = new EmbedBuilder()
          .setDescription(`:x:  **This server doesn't have an icon.**`)
          .setColor('#2f3136');

        return interaction.reply({ embeds: [errorEmbed], ephemeral: true });
      }
        await interaction.deferReply()

      const row = new ActionRowBuilder()
	  .addComponents(
        new ButtonBuilder()
          .setLabel('Server Icon URL')
          .setStyle(ButtonStyle.Link)
          .setURL(`${iconURL}?size=1024`)
      );

      const embed = new EmbedBuilder()
        .setAuthor({ name: interaction.guild.name })
        .setImage(iconURL)
        .setColor('#2F3136')
        .setFooter({
          text: '©️ IVON',
          iconURL: 'https://i.imgur.com/sB02Hbz.png',
        });

      interaction.editReply({ embeds: [embed], components: [row] });
    } catch (error) {
      const errorEmbed = new EmbedBuilder()
        .setDescription(`:x: **Something went wrong while retrieving the server icon.**`)
        .setColor('#2f3136');

      interaction.editReply({ embeds: [errorEmbed] });
    }
  },
};
