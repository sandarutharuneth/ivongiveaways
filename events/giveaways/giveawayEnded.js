const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        components: [new ActionRowBuilder()
                    .addComponents(
                          new ButtonBuilder()
                      .setLabel("Jump to the Giveaway")
                      .setStyle(ButtonStyle.Link)
                      .setURL(`https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}`)
                      .setEmoji('973495590921043968'),
                          new ButtonBuilder()
                      .setLabel("Vote Me")
                      .setStyle(ButtonStyle.Link)
                      .setURL("https://top.gg/bot/973436715819745290/vote")
                      .setEmoji('960895425567666246'),
                          new ButtonBuilder()
                      .setLabel("Invite Me")
                      .setStyle(ButtonStyle.Link)
                      .setURL("https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands")
                      .setEmoji('984296691794583582'))],
        embeds: [new EmbedBuilder()
          .setAuthor({name: "Congratulations!", iconURL: "https://i.imgur.com/sB02Hbz.png"})
          .setColor("#2F3136")
          .setThumbnail('https://i.imgur.com/sB02Hbz.png')
          .setDescription(`<:DotYellow:1002212470812852245> Hello there ${member.user}\n <:DotBlue:1002212466480128032> Congrats!! you have won **${giveaway.prize}!**\n <:DotBlue:1002212466480128032> DM ${giveaway.hostedBy} to claim your prize!`)
          .setImage('https://i.imgur.com/uQFQGrH.png')
          .setTimestamp()
          .setFooter({
            text: `©️ IVON`, 
            iconURL: ('https://i.imgur.com/sB02Hbz.png')
           })
        ]
      }).catch(e => {})
    });

  }
}
