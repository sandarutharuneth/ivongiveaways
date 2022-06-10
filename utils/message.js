const config = require('../config.json');
module.exports = {
  giveaway:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "<:confetti:973495590921043968> **GIVEAWAY** <:confetti:973495590921043968>",
  giveawayEnded:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "<:wrong:984664520364552192> **GIVEAWAY ENDED**",
  drawing:  `Ends: **{timestamp}**`,
  color: "#2F3136",
  inviteToParticipate: `React with <:confetti:973495590921043968> to participate!`,
  winMessage: "Congratulations, {winners}! You won **{this.prize}**!",  
  embedFooter: "Giveaways",
  noWinner: "Giveaway cancelled, no valid participations.",
  hostedBy: "Hosted by: {this.hostedBy}",
  winners: "winner(s)",
  endedAt: "Ended at"
}