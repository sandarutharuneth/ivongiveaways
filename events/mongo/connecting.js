const chalk = require("chalk");

module.exports = {
  name: "connecting",
  execute() {
    console.log(chalk.cyan("[MONGO DB]: Connecting to MongoDB..."));
  },
};
