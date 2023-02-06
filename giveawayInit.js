const { GiveawaysManager } = require("discord-giveaways");
const giveawayModel = require('./schemas/giveawaysSchema');

module.exports = (client) =>{

    class GiveawayManagerCustom extends GiveawaysManager {


        async getAllGiveaways() {
            return await giveawayModel.find().lean().exec();
        }
    
        async saveGiveaway(messageId, giveawayData) {
            await giveawayModel.create(giveawayData);
            return true;
        }
    
        async editGiveaway(messageId, giveawayData) {
            await giveawayModel.updateOne({ messageId }, giveawayData, { omitUndefined: true }).exec();
            return true;
        }
    
        async deleteGiveaway(messageId) {
            await giveawayModel.deleteOne({ messageId }).exec();
            return true;
        }
    };

    const manager = new GiveawayManagerCustom(client, {
        storage: false,
        updateCountdownEvery: 10000,
        default: {
            botsCanWin: false,
            exemptPermissions: [],
            embedColor: "#FF0000",
            reaction: "🎉"
        }
    });
    
    client.giveawaysManager = manager
}
