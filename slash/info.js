const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'info',
    description: '📚 Check my system info!',
    run: async (client, interaction) => {      
      let ccount = client.channels.cache.size;
      let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 
})

    const row = new ActionRowBuilder()
			.addComponents(
        new ButtonBuilder()
    .setLabel(`Invite ${client.user.username}`)
    .setStyle(ButtonStyle.Link)
    .setURL("https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands")
    .setEmoji('973537545289875486'),
        new ButtonBuilder()
    .setLabel("Donate")
    .setStyle(ButtonStyle.Link)
    .setURL("https://www.paypal.com/donate/?hosted_button_id=5AQSEPRZ6SNRG")
    .setEmoji('972037997262417960')
      )
  
  let pembed = new EmbedBuilder()
    .setAuthor({name: "IVON", iconURL: "https://i.imgur.com/sB02Hbz.png" })
    .setTitle('Information')
    .setColor('#2F3136')
    .setThumbnail('https://i.imgur.com/sB02Hbz.png')
    .setTimestamp()
    .addFields(
        { name: "\Server", value: `\`\`\`ini\n[ ${client.guilds.cache.size} ]\n\`\`\``, inline: true },
        {name: "Users", value: `\`\`\`ini\n[ ${mcount} ]\n\`\`\``, inline: true },
        {name: "Channels", value: `\`\`\`ini\n[ ${ccount} ]\n\`\`\``, inline: true}
               )
    .setDescription(`
**= STATISTICS =**
> **• Discord.js** : v14.7.1
> **• Node**       : v19.3.0

**= SYSTEM =**
> **• Hosting**     : Zap
> **• Platform**   : Linux

**= CPU =**
> **• Model**      : AMD Ryzen™ 9 5950X
> **• Speed**      : 4.9GHz
> **• Cores**      : 16`)
    .setFooter({
        text: `©️ IVON`, 
        iconURL: ('https://i.imgur.com/sB02Hbz.png')
    })
        interaction.reply({
          embeds: [pembed], components: [row]
        });
    },
};
