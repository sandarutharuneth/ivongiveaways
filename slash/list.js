const Discord = require('discord.js');
module.exports =  {
  name: 'list',
    description: 'List all the active giveaways for this guild.',
    run: async (client, interaction) => {
       let giveaways = client.giveawaysManager.giveaways.filter(g => g.guildId === `${interaction.guild.id}` && !g.ended);
          if (!giveaways.some(e => e.messageId)) {
            return interaction.reply('No Giveaways To Be Displayed')
          }
      /*
          let embed = new Discord.MessageEmbed()
            .setTitle("Currently Active Giveaways")
            .setColor("#2F3136")
            .setFooter({
               text: `©️ IVON`,
               iconURL: (process.env.FOOTERIMG)
            })
            .setTimestamp()
          let embedGuild = new Discord.MessageEmbed()
            .setTitle("Currently Active Join Requirement Giveaways")
            .setColor("#2F3136")
            .setFooter({
               text: `©️ IVON`,
               iconURL: (process.env.FOOTERIMG)
            })
          .setTimestamp()
      */
      const mainembed = new MessageEmbed()
      .setDescription(`Currently Active Giveaways \n `)
      .setColor("#2F3136")
      .setFooter({
               text: `©️ IVON`,
               iconURL: (process.env.FOOTERIMG)
            })
          .setTimestamp()
        const msg = await interaction.channel.send({ embeds: [] })

    }
  
}