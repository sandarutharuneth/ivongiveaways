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
            DISCORD_EMPLOYEE: '<:BadgeStaff:990666549163610252>', //Replace your emoji here
            DISCORD_PARTNER: '<:Partner:990667758654091274>', //Replace your emoji here
            BUGHUNTER_LEVEL_1: '<:bughunterlv1:990666534609354843>', //Replace your emoji here
            BUGHUNTER_LEVEL_2: '<:bughunterlv2:990666595795873832>', //Replace your emoji here
            HYPESQUAD_EVENTS: '<:discord_serveur:990666593455452200>', //Replace your emoji here
            HOUSE_BRAVERY: '<:bravery:990666567593373736>', //Replace your emoji here
            HOUSE_BRILLIANCE: '<:brillance:990666570013479042>', //Replace your emoji here
            HOUSE_BALANCE: '<:balance:990666565273911427>', //Replace your emoji here
            EARLY_SUPPORTER: '<:earlysupporter:990666536802992188>', //Replace your emoji here
            SYSTEM: '<:developer:974687011040526376>', //Replace your emoji here
            VERIFIED_BOT: '<:gg:991441731163803799><:ggg:991441739590156290>', //Replace your emoji here
            VERIFIED_DEVELOPER: '<:developersofDiscord:990666539218899004>', //Replace your emoji here
            NITRO: '<:DiscordNitro:990666558235877396>', //Replace your emoji here
            BOOSTER_1: '<:1m:991804502455885824>', //Replace your emoji here
            BOOSTER_2: '<:2m:991804500388102305>', //Replace your emoji here
            BOOSTER_3: '<:3m:991804504678867026>', //Replace your emoji here
            BOOSTER_4: '<:6m:991804497384972490>', //Replace your emoji here
            BOOSTER_5: '<:9m:991804517706375278>', //Replace your emoji here
            BOOSTER_6: '<:12m:991804515198193674>', //Replace your emoji here
            BOOSTER_7: '<:15m:991804512434147418>', //Replace your emoji here
            BOOSTER_8: '<:18m:991804509766557767>', //Replace your emoji here
            BOOSTER_9: '<:24m:991804507308707850>', //Replace your emoji here
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
                .setColor("2f3136")
                .setTitle('**WHO THE HELL IS THIS?**')
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                
              .setDescription(`
              **Name:** \`${member.user.username}\`
                Nickname: **${member.nickname}**
                Tag: **${member.user.tag}**
                ID: **${member.user.id}**
                Avatar: [PNG](${avpng})\n
              **Creation:** \`${joinedDiscordAt}\`
              **Joined:** \`${joinedServerAt}\`
              **Bot:** ${isBot}
              **Discord Badges:** ${badges}\n
              **Status:** \n${status}\n
              **Activity:** \n${userstatus}\n
              **Highest Role:** \n${highestRole}\n
              **Roles:** \n${Roles}\n
              **Permissions:** \n\`\`\`ini\n[ ${memberPermissons} ]\`\`\``)
              .setFooter({ text: '©️ IVON', iconURL: (process.env.FOOTERIMG) })
            await interaction.reply({
                content: `Information about **${member.user.tag}**`,
                embeds: [UserInfoEm]
            });

    },
};
