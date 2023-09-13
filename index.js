const Discord = require("discord.js");
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const chalk = require("chalk");
const config = require("./config.json");
const Handler = require("discord-handlers");
const handler = new Handler();
const { connect } = require("mongoose");
const GiveawaysManager = require("./giveawayInit");

const client = new Client({
  partials: [
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
  ],
});
const fs = require("fs");

client.config = config;

(async () => {
  await connect(config.MONGODB_URI).catch((err) =>
    console.log(chalk.red(`[MONGO DB]: Error: ${err}`))
  );
})();

handler.handleMongoEvents("./events/mongo", client);

// Initialise discord giveaways
GiveawaysManager(client);


/* Load all events (discord based) */
fs.readdir("./events/discord", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/discord/${file}`);
    let eventName = file.split(".")[0];
    console.log(`[Event]   ✅  Loaded: ${eventName}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/discord/${file}`)];
  });
});

/* Load all events (giveaways based) */
fs.readdir("./events/giveaways", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/giveaways/${file}`);
    let eventName = file.split(".")[0];
    console.log(`[Event]   🎉 Loaded: ${eventName}`);
    client.giveawaysManager.on(eventName, (...file) =>
      event.execute(...file, client)
    ),
      delete require.cache[require.resolve(`./events/giveaways/${file}`)];
  });
});

// if(config.privateMessageInformation === true) {
//   fs.readdirSync('./events/giveaways').forEach(async (dir) => {
//       const events = fs.readdirSync(`./events/giveaways/${dir}`).filter(file => file.endsWith('.js'));
  
//       for(const file of events) {
//           const event = require(`./events/giveaways/${dir}/${file}`);
//           if(event.name) {
//               // console.log(`[GIVEAWAYS EVENTS]` + ` Event ${file.split(".")[0]} loaded!`);
          
//               client.giveawaysManager.on(event.name, (...args) => event.execute(...args, client))
//               delete require.cache[require.resolve(`./events/giveaways/${dir}/${file}`)];
//           } else {
//               console.log(`[GIVEAWAYS EVENTS]` + ` Failed to load event: ${file.split('.')[0]}!`);
//               continue;
//           }
//       }
//   });
// } else {
//   return console.log(`[WARNING]`.yellow + ` Private Message Information is disabled!`);
// }

/* Load all events (mongo based) */



// let interactions be a new collection ( slash commands  )
client.interactions = new Discord.Collection();

// creating an empty array for registering slash commands
client.register_arr = [];

/* Load all slash commands */
fs.readdir("./slash/", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./slash/${file}`);
    let commandName = file.split(".")[0];
    client.interactions.set(commandName, {
      name: commandName,
      ...props,
    });
    client.register_arr.push(props);
  });
});

// Login through the client
client.login(config.token);

