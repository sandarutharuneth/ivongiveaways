const { ApplicationCommandOptionType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: "bug",
  description: "Report a bug",
  options: [
    {
      name: 'describe',
      description: 'Describe the bug as much details as possible',
      type: ApplicationCommandOptionType.String,
      required: true
    },
    {
      name: 'image_link',
      description: 'Link of the Screen shots of the case',
      type: ApplicationCommandOptionType.String,
      required: true
    },  
  ],

  run: async (client, interaction) => {

    const channel = client.channels.cache.get(client.config.bug);
    const bugs = interaction.options.getString('describe');
    const ss = interaction.options.getString('image_link');
    const embed = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
      .setTitle(`New Bug Report`)
      .setFields(
        {name: 'Reporter', value: `\`${interaction.user.username}\``, inline: true},
        {name: 'Reporter ID', value: `\`${interaction.user.id}\``, inline: true},
        {name: 'Reporter BD', value: `<t:${parseInt(interaction.user.createdTimestamp / 1000)}:R>`, inline: true},
        {name: 'Server', value: `\`${interaction.guild.name}\``, inline: true},
        {name: 'Server ID', value: `\`${interaction.guild.id}\``, inline: true},
        {name: 'Creation Date', value: `<t:${parseInt(interaction.guild.createdTimestamp / 1000)}:R>`, inline: true},
      )
      .setImage(ss)	
      .setDescription(`${bugs}`)
      .setColor('#2F3136')
      .setFooter({ text: `Reported by: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
      .setTimestamp()

    const userr = new EmbedBuilder()
     .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
     .setThumbnail('https://i.imgur.com/Cbs7ljR.png') 
     .setDescription("<:success:997419321557012510> **Your Report Have Been Submitted!**\n<:invi:1000459192555024404><:dm:1010217254048251955> Check Your DM\n<:invi:1000459192555024404><:lock:1010213107651584101> DM locked? Then check this [link](https://officialrazer.xyz/reports)")
     .setColor('#2F3136')

    const dm = new EmbedBuilder()
     .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
     .setTitle('Little Notice for you') 
     .setDescription("By submitting the report, you're agreeing to our privacy policy and our terms of conditions at Project Razer LLC. All your reports and your user data will be recorded and stored until the casefile is done. Spam reports will result in a blacklist or permanent ban on all our products or services. Please use the report system wisely. Have a nice day and thanks for your report.")
     .setColor('#2F3136')
    .setFooter({ text: 'Project Razer LLC', iconURL: 'https://i.imgur.com/ewa2N7p.png' })

    const row = new ActionRowBuilder()
       .addComponents(
    	new ButtonBuilder()
    .setLabel("Read Privacy Policy")
    .setStyle(ButtonStyle.Link)
    .setURL("https://www.ivongiveaways.com/privacy-policy")
    .setEmoji('1010217251384868944'),
    new ButtonBuilder()
    .setLabel("Read Terms of Service")
    .setStyle(ButtonStyle.Link)
    .setEmoji('1010217248843120790')
    .setURL("https://www.ivongiveaways.com/terms-of-service"));

    
    channel.send({ embeds: [embed] });
    interaction.member.send({ embeds: [dm], components: [row] });
    interaction.reply({embeds: [userr], components: [row] });
  }

};
