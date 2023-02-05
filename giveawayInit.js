const { GiveawaysManager } = require("discord-giveaways");
const { Database } = require("quickmongo");
require("dotenv").config();
const db = new Database(process.env.MONGOLAB_URI);




class GiveawayManager extends GiveawaysManager {


    async getAllGiveaways() {
        return await db.get("giveaways");
    }

    async saveGiveaway(messageID, giveawayData) {
        await db.push("giveaways", giveawayData);
        return true;
    }

    async editGiveaway(messageID, giveawayData) {
        const giveaways = await db.get("giveaways");
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        newGiveawaysArray.push(giveawayData);
        await db.set("giveaways", newGiveawaysArray);
        return true;
    }

    async deleteGiveaway(messageID) {
        const data = await db.get("giveaways");
        const newGiveawaysArray = data.filter((giveaway) => giveaway.messageID !== messageID);
        await db.set("giveaways", newGiveawaysArray);
        return true;
    }

}

module.exports = GiveawayManager;