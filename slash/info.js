const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: 'info',
    description: '📚 Check my system info!',
    run: async (client, interaction) => {      
      let ccount = client.channels.cache.size;
      let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 
})

    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel(`Invite ${client.user.username}`)
    .setStyle("LINK")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands")
    .setEmoji('973537545289875486'),
        new MessageButton()
    .setLabel("Donate")
    .setStyle("LINK")
    .setURL("https://www.paypal.com/donate/?hosted_button_id=5AQSEPRZ6SNRG")
    .setEmoji('972037997262417960')
      )
  
  let pembed = new MessageEmbed()
    .setAuthor({name: "IVON", iconURL: "https://i.imgur.com/JkHM4c3.png" })
    .setTitle('Information')
    .setColor('#2F3136')
    .setThumbnail(process.env.THUMBNAIL)
    .setTimestamp()
    .addField("\Server", `\`\`\`ini\n[ ${client.guilds.cache.size} ]\n\`\`\``, true)
    .addField("Users", `\`\`\`ini\n[ ${mcount} ]\n\`\`\``, true)
    .addField("Channels", `\`\`\`ini\n[ ${ccount} ]\n\`\`\``, true)
    .setDescription(`
**= STATISTICS =**
> **• Discord.js** : v13.6.0
> **• Node**       : v17.7.2

**= SYSTEM =**
> **• Hosted**     : Dream Host
> **• Platform**   : Linux

**= CPU =**
> **• Model**      : AMD Ryzen™ 9 5950X
> **• Speed**      : 4.9GHz
> **• Cores**      : 16`)
    .setFooter({
        text: `©️ IVON`, 
        iconURL: (process.env.FOOTERIMG)
    })
        interaction.reply({
          embeds: [pembed], components: [row]
        });
    },
};