const { EmbedBuilder, StringSelectMenuBuilder, ActionRowBuilder, SelectMenuBuilder, ComponentType } = require('discord.js');
const config = require('../config.json');

module.exports = {
  name: 'help',
  description: '📜 View all the commands available to the bot!',
  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
      .setTitle(`Commands of ${client.user.username}`)
      .setColor('#2F3136')
      .setDescription('Please Select a category to view all its commands\n<:invi:1000459192555024404><:next:1000472400049209385> **Giveaway Commands** \n<:invi:1000459192555024404><:next:1000472400049209385> **Configuration Commands**')
      .setImage("https://i.imgur.com/WYkvZTd.png")
      .setThumbnail('https://i.imgur.com/sB02Hbz.png')
      .setTimestamp()
      .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    });

    const giveaway = new EmbedBuilder()
      .setTitle("Categories » Giveaway")
      .setColor('#2F3136')
      .setImage('https://i.imgur.com/ASGaLqS.png')
      .setDescription("<:sort:1003268901360115842> Here are the giveaway commands")
      .addFields(
    { name: 'Create / Start'  , value: `Start a giveaway in your guild!\n > **Type: \`/start\`**`, inline: true },
    { name: 'Edit' , value: `Edit an already running giveaway!\n > **Type: \`/edit\`**`, inline: true },
    { name: 'End' , value: `End an already running giveaway!\n > **Type: \`/end\`**`, inline: true },
    { name: 'Pause' , value: `Pause an already running giveaway!\n > **Type: \`/pause\`**`, inline: true },
    { name: 'Reroll' , value: `Reroll an ended giveaway!\n > **Type: \`/reroll\`**`, inline: true },
    { name: 'Resume' , value: `Resume a paused giveaway!\n > **Type: \`/resume\`**`, inline: true },
  )
      .setTimestamp()
      .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    });

    const general = new EmbedBuilder()
      .setTitle("Categories » Configuration")
      .setColor('#2F3136')
      .setImage('https://i.imgur.com/SwLgJmt.png')
      .setDescription("<:sort:1003268901360115842> Here are the configuration commands in slash")
      .addFields(
        { name: 'Help', value: `Show the help menu.\n > **Type: \`/help\`**`, inline: true },
        { name: 'About', value: `Show About Ivon.\n > **Type: \`/about\`**`, inline: true },
        { name: 'Server Info', value: `Shows server info.\n > **Type: \`/serverinfo\`**`, inline: true },
        { name: 'Server Icon', value: `Shows server icon.\n > **Type: \`/servericon\`**`, inline: true },
        { name: 'User Info', value: `Shows user info.\n > **Type: \`/userinfo\`**`, inline: true },
        { name: 'User Avatar', value: `Shows user avatar.\n > **Type: \`/avatar\`**`, inline: true },
        { name: 'Invite', value: `Get the bot's invite link.\n > **Type: \`/invite\`**`, inline: true },
        { name: 'Ping', value: `Check the bot's ping!\n > **Type: \`/ping\`**`, inline: true },
        { name: 'System', value: `Check the bot's System info.\n > **Type: \`/info\`**`, inline: true },
        { name: 'Report Bugs', value: `Submit a bug report.\n > **Type: \`/bug\`**`, inline: true},
      )
      .setTimestamp()
      .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    });

    const components = (state) => [
      new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId("help-menu")
          .setPlaceholder("Please Select a Category")
          .setDisabled(state)
          .addOptions([{
            label: `Giveaways`,
            value: `giveaway`,
            description: `View all the giveaway based commands!`,
            emoji: `<:confetti:984296694357319730>`
          },
          {
            label: `Configuration`,
            value: `general`,
            description: `View all the general bot commands!`,
            emoji: `<:Discord_settings:990669159849414736>`
          }
          ])
      ),
    ];

    const initialMessage = await interaction.reply({ embeds: [embed], components: components(false) });

    const filter = (interaction) => interaction.user.id === interaction.member.id;

    const collector = interaction.channel.createMessageComponentCollector(
      {
        filter,
        componentType: ComponentType.SelectMenu,
        idle: 300000,
        dispose: true,
      });

    collector.on('collect', (interaction) => {
      if (interaction.values[0] === "giveaway") {
        interaction.update({ embeds: [giveaway], components: components(false) }).catch((e) => { });
      } else if (interaction.values[0] === "general") {
        interaction.update({ embeds: [general], components: components(false) }).catch((e) => { });
      }
    });
    collector.on('end', (collected, reason) => {
      if (reason == "time") {
        initialMessage.edit({
          content: "Collector Destroyed, Try Again!",
          components: [],
        });
      }
    })
  }
}
