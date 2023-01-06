const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  async execute(giveaway, reactor, messageReaction) {

    const noice = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Vote Me")
          .setStyle(ButtonStyle.Link)
          .setURL("https://top.gg/bot/973436715819745290/vote")
          .setEmoji('960895425567666246'),
        new ButtonBuilder()
          .setLabel('Patreon')
          .setStyle(ButtonStyle.Link)
          .setEmoji('1001122523175465061')
          .setURL("https://www.patreon.com/ivongiveaways"),
        new ButtonBuilder()
          .setLabel("Invite Me")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands")
          .setEmoji('984296691794583582'),
    );
    
    let approved =  new EmbedBuilder()
    .setTimestamp()
    .setColor("#2F3136")
    .setAuthor({name: "Entry Confirmed!", iconURL: "https://i.imgur.com/Lf1IHlA.png"})    
    .setDescription(
      `<:DotGreen:1002212464345239643> Your entry to **${giveaway.prize}** on [This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) has been approved! \n<:DotGreen:1002212464345239643> Earn extra points by **Voting**. \n<:DotPink:1002212468870877304> Hosted By: ${giveaway.hostedBy}`
    )
    .setFooter({ text: "©️ IVON", iconURL: ('https://i.imgur.com/sB02Hbz.png') })
    .setTimestamp()

    const lol = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Vote Me")
          .setStyle(ButtonStyle.Link)
          .setURL("https://top.gg/bot/973436715819745290/vote")
          .setEmoji('960895425567666246'),
        new ButtonBuilder()
          .setLabel('Patreon')
          .setStyle(ButtonStyle.Link)
          .setEmoji('1001122523175465061')
          .setURL("https://www.patreon.com/ivongiveaways"),
        new ButtonBuilder()
          .setLabel("Invite Me")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands")
          .setEmoji('984296691794583582'),
    );
    
   let denied =  new EmbedBuilder()
    .setTimestamp()
    .setColor("#2F3136")
    .setAuthor({name: "Entry Denied!", iconURL: "https://i.imgur.com/Jjo00oT.png"})    
    .setDescription(
      `<:DotPink:1002212468870877304> Your entry to **${giveaway.prize}** on [This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) has been denied! \n<:DotPink:1002212468870877304> Please review the requirements to enter the giveaway properly. \n<:DotPink:1002212468870877304> Hosted By: ${giveaway.hostedBy}`
    )
    .setFooter({ text: "©️ IVON", iconURL: ('https://i.imgur.com/sB02Hbz.png') })

    let client = messageReaction.message.client
    if (reactor.user.bot) return;
    if(giveaway.extraData) {      
      if (giveaway.extraData.role !== "null" && !reactor.roles.cache.get(giveaway.extraData.role)){ 
        messageReaction.users.remove(reactor.user);
        return reactor.send({
          embeds: [denied],
          components: [lol]
        }).catch(e => {})
      }

      return reactor.send({
        embeds: [approved],
        components: [noice]
      }).catch(e => {})
    } else {
        return reactor.send({
          embeds: [approved]
        }).catch(e => {})
    }
    }
  }
