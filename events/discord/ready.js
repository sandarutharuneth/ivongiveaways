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
  const activities = [
    'Your Giveaways',
    '/help',
    'www.ivongiveaways.com'
  ]

  setInterval(() => {
    const status = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity({ name: `${status}`, type: ActivityType.Watching })
  }, 5000);

};


// Do this one if you want the streaming Status //

/*
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
  
 client.user.setActivity({ name: `Your Giveaways`, type: ActivityType.Streaming, url: 'https://youtube.com/' })

};*/
