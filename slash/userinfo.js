const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const moment = require("moment");
const { default: fetch } = require("node-fetch");

module.exports = {
    name: "userinfo",
    description: "Gives information about a user or server",
    UserPerms: ["MANAGE_MESSAGES"],
    BotPerms: ["EMBED_LINKS"],
    options: [
                {
                    name: "member",
                    description: "Please select a server member of whose information you want",
                    type: "USER",
                    required: false,
                },
    ],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

       const flags = {
            DISCORD_EMPLOYEE: '<emoji:123456789123>', //Replace your DISCORD_EMPLOYEE emojis here
            DISCORD_PARTNER: '<emoji:123456789123>', //Replace your DISCORD_PARTNER emojis here
            BUGHUNTER_LEVEL_1: '<emoji:123456789123>', //Replace your BUGHUNTER_LEVEL_1 emojis here
            BUGHUNTER_LEVEL_2: '<emoji:123456789123>', //Replace your BUGHUNTER_LEVEL_2 emojis here
            HYPESQUAD_EVENTS: '<emoji:123456789123>', //Replace your HOUSE_BRAVERY emojis here
            HOUSE_BRAVERY: '<emoji:123456789123>', //Replace your HOUSE_BRILLIANCE emojis here
            HOUSE_BRILLIANCE: '<emoji:123456789123>', //Replace your HOUSE_BRILLIANCE emojis here
            HOUSE_BALANCE: '<emoji:123456789123>', //Replace your HOUSE_BALANCE emojis here
            EARLY_SUPPORTER: '<emoji:123456789123>', //Replace your EARLY_SUPPORTER emojis here
            SYSTEM: '<emoji:123456789123>', //Replace your SYSTEM emojis here
            VERIFIED_BOT: '<emoji:123456789123>', //Replace your VERIFIED_BOT emojis here
            VERIFIED_DEVELOPER: '<emoji:123456789123>', //Replace your VERIFIED_DEVELOPER emojis here
            NITRO: '<emoji:123456789123>', //Replace your NITRO emojis here
            BOOSTER_1: '<emoji:123456789123>', //Replace your BOOSTER_1 emojis here
            BOOSTER_2: '<emoji:123456789123>', //Replace your BOOSTER_2 emojis here
            BOOSTER_3: '<emoji:123456789123>', //Replace your BOOSTER_3 emojis here
            BOOSTER_4: '<emoji:123456789123>', //Replace your BOOSTER_4 emojis here
            BOOSTER_5: '<emoji:123456789123>', //Replace your BOOSTER_5 emojis here
            BOOSTER_6: '<emoji:123456789123>', //Replace your BOOSTER_6 emojis here
            BOOSTER_7: '<emoji:123456789123>', //Replace your BOOSTER_7 emojis here
            BOOSTER_8: '<emoji:123456789123>', //Replace your BOOSTER_8 emojis here
            BOOSTER_9: '<emoji:123456789123>', //Replace your BOOSTER_9 emojis here
          };
 //badge system 
      
      
      const { options } = interaction;
        const user = await options.getUser("member") || interaction.user;
        const member = await interaction.guild.members.fetch(user);
        const owner = await interaction.guild.fetchOwner();

            const avpng = member.user.displayAvatarURL({ format: "png", dynamic: true })
            const joinedServerAt = `${moment(member.joinedTimestamp).format("DD/MM/YYYY")}`
            const isBot = member.user.bot ? "✅" : "❌";
            let memberPermissons = `${member.permissions.toArray().map(p => `${p}`).join(", ")}`;
            if (member.user.id === owner.id) {
                memberPermissons = "SERVER_OWNER"
            };
            const joinedDiscordAt = `${moment(member.user.createdTimestamp).format("DD/MM/YYYY")}`
            const statuses = {
                "online": "🟢",
                "idle": "🌙",
                "dnd": "⛔",
                "offline": "⚫️",
            };
            const status = `${statuses[member.presence?.status]} ${member.presence?.status}`
            const activity = member.presence?.activities[0];
            var userstatus = "None";
            if (activity) {
                if (activity.type === "CUSTOM_STATUS") {
                    let emoji = `${activity.emoji ? activity.emoji.id ? `<${activity.emoji.animated ? "a" : ""}:${activity.emoji.name}:${activity.emoji.id}>` : activity.emoji.name : ""}`
                    userstatus = `${emoji} \`${activity.state || 'None'}\``
                }
                else {
                    userstatus = `\`${activity.type.toLowerCase().charAt(0).toUpperCase() + activity.type.toLowerCase().slice(1)} ${activity.name}\``
                }
            };
            const totalRoles = await member.roles.cache.size;
            const roles = await member.roles;
            const highestRole = member.roles.highest.id === interaction.guild.id ? 'None' : member.roles.highest;
            function trimArray(arr, maxLen = 25) {
                if (Array.from(arr.values()).length > maxLen) {
                    const len = Array.from(arr.values()).length - maxLen;
                    arr = Array.from(arr.values()).sort((a, b) => b.rawPosition - a.rawPosition).slice(0, maxLen);
                    arr.map(role => `<@&${role.id}>`)
                    arr.push(`${len} more...`);
                }
                return arr.join(", ");
            }
            const Roles = await member.roles.cache.size < 25 ? Array.from(roles.cache.values()).sort((a, b) => b.rawPosition - a.rawPosition).map(role => `<@&${role.id}>`).join(', ') : roles.cache.size > 25 ? trimArray(roles.cache) : "None";

const response = await fetch( 
 `https://japi.rest/discord/v1/user/${user.id}`
        );
        const data = await response.json(); //public_flags_array

      const badges = data.data.public_flags_array
            ? data.data.public_flags_array.map((flag) => flags[flag]).join(" ")
            : "No Badges.";


            const UserInfoEm = new MessageEmbed()
                .setColor("BLURPLE")
                .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .addFields(
                    { name: `Avatar:`, value: `[PNG](${avpng})`, inline: true },
                    { name: `Joined Discord At:`, value: `${joinedDiscordAt}`, inline: true },
                    { name: `Bot:`, value: `${isBot}`, inline: true },
                    { name: `Badges:`, value: `${badges}`, inline: true },
                    { name: `Status:`, value: `${status}`, inline: true },
                    { name: `Activity:`, value: `${userstatus}`, inline: true },
                    { name: `Highest Role:`, value: `${highestRole}`, inline: true },
                    { name: `Roles:`, value: `[${totalRoles}] -\n ${Roles}`, inline: true },
{ name: `Permissions:`, value: `${memberPermissons}`, inline: true },
         )
              .setDescription(`**User Info**`)
                .setFooter(`ID - ${member.user.id} | Joined Server At - ${joinedServerAt}`)
            await interaction.reply({
                content: `Information about **${member.user.tag}**`,
                embeds: [UserInfoEm]
            });

    },
};
