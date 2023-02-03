const {
  ApplicationCommandOptionType,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
module.exports = {
  name: "avatar",
  description: "Shows User Avatar",
  options: [
    {
      name: "user",
      type: ApplicationCommandOptionType.User,
      description: "Select a user",
      required: false,
    },
  ],
  run: async (client, interaction) => {
    const user = interaction.options.getUser("user") || interaction.user;
    const fetch = require("axios");
    let userdata = await fetch.get(
      `https://discord.com/api/guilds/${interaction.guild.id}/members/${user.id}`,
      {
        headers: {
          Authorization: `Bot ${client.token}`,
        },
      }
    );

    if (userdata.data.avatar !== undefined && userdata.data.avatar !== null) {
      let AvatarURL = `https://cdn.discordapp.com/guilds/${interaction.guild.id}/users/${user.id}/avatars/${userdata.data.avatar}.webp?size=1024`;
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel(`Avatar URL`)
          .setStyle(ButtonStyle.Link)
          .setURL(AvatarURL)
      );

      const embed = new EmbedBuilder()
        .setTitle(`${user.username}'s Avatar`)
        .setColor("#2F3136")
        .setFooter({
          text: `Requested by: ${interaction.user.username}`,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        })
        .setImage(AvatarURL);
      interaction.reply({ embeds: [embed], components: [row] });
    } else {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel(`Avatar URL`)
          .setStyle(ButtonStyle.Link)
          .setURL(
            `${user.displayAvatarURL({
              dynamic: false,
              format: "png",
              size: 1024,
            })}`
          )
      );

      const embed = new EmbedBuilder()
        .setTitle(`${user.username}'s Avatar`)
        .setColor("#2F3136")
        .setFooter({
          text: `Requested by: ${interaction.user.username}`,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        })
        .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }));
      interaction.reply({ embeds: [embed], components: [row] });
    }
  },
};
