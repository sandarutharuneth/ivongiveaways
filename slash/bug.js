const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require('discord.js');
const moment = require('moment');

module.exports = {
  name: "bug",
  description: "Report a bug",
  options: [
    {
      name: 'describe',
      description: 'Describe the bug as much details as possible',
      type: 'STRING',
      required: true
    },
  ],

  run: async (client, interaction) => {

    const channel = client.channels.cache.get(client.config.bug);
    const bugs = interaction.options.getString('describe');
    const embed = new MessageEmbed()
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
      .setDescription(`${bugs}`)
      .setColor('#2F3136')
      .setFooter({ text: `Reported by: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
      .setTimestamp()

    const userr = new MessageEmbed()
     .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
     .setThumbnail('https://i.imgur.com/Cbs7ljR.png') 
     .setDescription("**Your Report Have Been Submitted!**\nCheck Your DM\nDM locked? Then check this [link](https://officialrazer.xyz/reports)")
     .setColor('#2F3136')

    const dm = new MessageEmbed()
     .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
     .setTitle('Little Notice for you') 
     .setDescription("By submitting the report, you're agreeing to our privacy policy and our terms of conditions at Project Razer LLC. All your reports and your user data will be recorded and stored until the casefile is done. Spam reports will result in a blacklist or permanent ban on all our products or services. Please use the report system wisely. Have a nice day and thanks for your report.")
     .setColor('#2F3136')
    .setFooter({ text: 'Project Razer LLC', iconURL: 'https://i.imgur.com/ewa2N7p.png' })

    const row = new MessageActionRow()
       .addComponents(
    	new MessageButton()
    .setLabel("Read Privacy Policy")
    .setStyle("LINK")
    .setURL("https://www.officialrazer.xyz/privacy-policy")
    .setEmoji('1010217251384868944'),
    new MessageButton()
    .setLabel("Read Terms of Service")
    .setStyle("LINK")
    .setEmoji('1010217248843120790')
    .setURL("https://www.officialrazer.xyz/terms-of-use"));

    
    channel.send({ embeds: [embed] });
    interaction.member.send({ embeds: [dm], components: [row] });
    interaction.reply({embeds: [userr], components: [row] });
  }

};
