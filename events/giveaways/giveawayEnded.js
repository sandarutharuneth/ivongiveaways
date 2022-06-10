const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setAuthor({name: "Congratulations!", iconURL: "https://i.imgur.com/JkHM4c3.png"})
          .setColor("#2F3136")
          .setThumbnail(process.env.THUMBNAIL)
          .setDescription(`Hello there ${member.user}\n Congrats!! you have won **${giveaway.prize}!** on **[This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\nDM the host to claim your prize! \n\n [Invite](https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands) | [Twitter](https://twitter.com/razerofficials) | [Patreon](https://www.patreon.com/projectrazer)`)
          .setImage('https://i.imgur.com/rsPSjDo.gif')
          .setTimestamp()
          .setFooter({
            text: `©️ IVON`, 
            iconURL: (process.env.FOOTERIMG)
           })
        ]
      }).catch(e => {})
    });

  }
}
