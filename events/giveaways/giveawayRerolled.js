const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setAuthor({name: "Congratulations!", iconURL: (process.env.THUMBNAIL)})
          .setThumbnail(process.env.THUMBNAIL)
          .setColor("#2F3136")
          .setDescription(`Hello there ${member.user}\n Host of the giveaway rerolled and you have won the Giveaway on **[This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\n Good Job On Winning **${giveaway.prize}!** <:confetti:973495590921043968><:confetti:973495590921043968>\nDirect Message the host to claim your prize!! \n\n [Invite](https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands) | [Twitter](https://twitter.com/razerofficials) | [Patreon](https://www.patreon.com/projectrazer)`)
          .setTimestamp()
          .setFooter({
            text: "©️ IVON", 
            iconURL: (process.env.FOOTERIMG)
          })
        ]
      }).catch(e => {})
    });
  }
}
