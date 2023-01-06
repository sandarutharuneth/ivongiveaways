const register = require('../../utils/slashsync');
const { ActivityType } = require('discord.js');

module.exports = async (client) => {
  
  await register(client, client.register_arr.map((command) => ({
    name: command.name,
    description: command.description,
    options: command.options,
    type: '1'
  })), {
    debug: true
  });

  console.log(`[ / | Slash Command ] - ✅ Loaded all slash commands!`)
  console.log(`[STATUS] ${client.user.tag} is now online!`);
  client.user.setPresence({
  activities: [{ name: `Your Giveaways`, type: ActivityType.Watching }],
  status: 'online',
});

};
