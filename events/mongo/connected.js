const chalk = require("chalk");

module.exports = {
  name: "connected",
  execute() {
    console.log(chalk.greenBright("[MONGO DB]: Connected to MongoDB!"));
  },
};
