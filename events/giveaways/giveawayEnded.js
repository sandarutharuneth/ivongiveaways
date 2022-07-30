const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({  
        components: [new MessageActionRow()
                    .addComponents(
                          new MessageButton()
                      .setLabel("Jump to the Giveaway")
                      .setStyle("LINK")
                      .setURL(`https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}`)
                      .setEmoji('973495590921043968'),
                          new MessageButton()
                      .setLabel("Vote Me")
                      .setStyle("LINK")
                      .setURL("https://discordbotlist.com/bots/ivon/upvote")
                      .setEmoji('974160940197113916'),
                          new MessageButton()
                      .setLabel("Invite Me")
                      .setStyle("LINK")
                      .setURL("https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands")
                      .setEmoji('984296691794583582'))],
        embeds: [new MessageEmbed()
          .setAuthor({name: "Congratulations!", iconURL: "https://i.imgur.com/sB02Hbz.png"})
          .setColor("#2F3136")
          .setThumbnail(process.env.THUMBNAIL)
          .setDescription(`Hello there ${member.user}\n Congrats!! you have won **${giveaway.prize}!**\n DM ${giveaway.hostedBy} to claim your prize!`)
          .setImage('https://i.imgur.com/uQFQGrH.png')
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
