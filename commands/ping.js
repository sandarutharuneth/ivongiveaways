const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  let m = await message.reply("Sending request to websocket...")
  let pong = new Discord.MessageEmbed()
    .setTitle("Pong!")
    .setColor('#2F3136')
    .setThumbnail(process.env.THUMBNAIL)
    .setTimestamp()
    .addField("Latency", `\`\`\`ini\n[ ${m.createdTimestamp - message.createdTimestamp}ms ]\n\`\`\``, true)
    .addField("API Latency", `\`\`\`ini\n[ ${Math.round(client.ws.ping)}ms ]\n\`\`\``, true)
    .setFooter({
        text: `©️ IVON`, 
        iconURL: (process.env.FOOTERIMG)
    });
     m.delete()
  message.reply({ content: " ", embeds: [pong] })
}
