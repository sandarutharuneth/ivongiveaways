const Discord = require('discord.js');
module.exports = {
  async execute(giveaway, member, reaction) {
    reaction.users.remove(member.user);
    member.send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor("#2F3136")
                       .setDescription("<:deprecated:1011850393334063154> **Oops! Looks Like that giveaway has already ended!** <:ended:1033984179672727553>"),
        ],
      })
      .catch((e) => {});
  },
};
