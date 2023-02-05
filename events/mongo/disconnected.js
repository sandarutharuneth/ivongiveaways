const chalk = require("chalk");

module.exports = {
  name: "disconnedted",
  execute(client) {
    console.log(chalk.red("[MONGO DB]: Disconnected from MongoDB!"));
  },
};
