const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'ping',
    description: '🏓Check my ping!',
    run: async (client, interaction) => {
      let pembed = new MessageEmbed()
		  .setTitle("Pong!")
      .setColor('#2F3136')
      .setThumbnail(process.env.THUMBNAIL)
		  .addField('**Latency**', `\`\`\`ini\n[ ${Date.now() - interaction.createdTimestamp}ms ]\n\`\`\``)
		  .addField('**API Latency**', `\`\`\`ini\n[ ${Math.round(client.ws.ping)}ms ]\n\`\`\``)
		  .setTimestamp()
                  .setFooter({
        text: `©️ IVON`, 
        iconURL: (process.env.FOOTERIMG)
    })
        interaction.reply({
          embeds: [pembed]
        });
    },
};
