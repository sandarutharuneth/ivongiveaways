const register = require('../../utils/slashsync');
module.exports = async (client) => {
  let servercount = await client.guilds.cache
  let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 
})
  await register(client, client.register_arr.map((command) => ({
    name: command.name,
    description: command.description,
    options: command.options,
    type: 'CHAT_INPUT'
  })), {
    debug: true
  });

  console.log(`[ / | Slash Command ] - ✅ Loaded all slash commands!`)
  console.log(`[STATUS] ${client.user.tag} is now online!`);
  const activities = [`Your Giveaways`, `${mcount} users`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "WATCHING" });
  }, 5000);

};
