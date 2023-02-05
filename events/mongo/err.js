const chalk = require("chalk");
module.exports = {
  name: "err",
  execute(err) {
    console.log(chalk.red("[MONGO DB]: Error: " + err + ""));
  },
};
