const Discord = require("discord.js");
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const chalk = require("chalk");
require("dotenv").config();
const { TOKEN, MONGOLAB_URI } = process.env;
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
const config = require("./config.json");
client.config = config;

// Initialise discord giveaways
const manager = new GiveawaysManager(client, {
  storage: false,
  updateCountdownEvery: 10000,
  default: {
    botsCanWin: false,
    embedColor: "#2F3136",
    reaction: "🎉",
    lastChance: {
      enabled: true,
      content: ` ⚠️ **Last chance to enter**`,
      threshold: 5000,
      embedColor: "#2F3136",
    },
  },
});
const { Database } = require("quickmongo");
const db = new Database(process.env.MONGOLAB_URI);
db.once("ready", async () => {
  if (await db.get("giveaways") === null) await db.set("giveaways", []);
  
});

client.giveawaysManager = manager;


//<:confetti:984296694357319730>
//<:warning:984663315412303922>
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

/* Load all events (mongo based) */

handler.handleMongoEvents("./events/mongo", client);

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
client.login(TOKEN);
// (async () => {
//   await connect(MONGOLAB_URI).catch((err) =>
//     console.log(chalk.red(`[MONGO DB]: Error: ${err}`))
//   );
// })();


