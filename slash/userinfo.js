const { EmbedBuilder, ActionRowBuilder, ApplicationCommandOptionType } = require('discord.js');
const moment = require("moment");
const japiRestPkg = require('japi.rest');
const japiRest = new japiRestPkg(' '); // Get ur japi key from https://key.japi.rest

module.exports = {
    name: "userinfo",
    description: "Gives information about a user or server",
    UserPerms: ["MANAGE_MESSAGES"],
    BotPerms: ["EMBED_LINKS"],
    options: [
                {
                    name: "member",
                    description: "Please select a server member of whose information you want",
                    type: ApplicationCommandOptionType.User,
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
            ACTIVE_DEVELOPER: '<:active_developer:1040582016112013382>',
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
            const isBot = member.user.bot ? "<:true:990666572366499940>" : "<:false:990666574295867393>";
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

            japiRest.discord.getUser(user.id).then(user => {
                data = user.data;
                fetch(data);
            });    
        
        async function fetch(data){
            const badges = data.public_flags_array ? data.public_flags_array.map((flag) => {
                return flags[flag];
            }) : "No Badges.";
        
            const UserInfoEm = new EmbedBuilder()
                        .setColor("2f3136")
                        .setTitle('**WHO THE HELL IS THIS?**')
                        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                        
                      .setDescription(`
                      <:profile:1000770439406157904> **Name:** \`${member.user.username}\`
                      <:invi:1000459192555024404><:next:1000472400049209385> Nickname: **${member.nickname}**
                      <:invi:1000459192555024404><:next:1000472400049209385> Tag: **${member.user.tag}**
                      <:invi:1000459192555024404><:next:1000472400049209385> ID: **${member.user.id}**
                      <:invi:1000459192555024404><:next:1000472400049209385> Avatar: [PNG](${avpng})\n
                      <:birthday:1000469205520502935> **Creation:** <t:${parseInt(member.user.createdTimestamp / 1000)}:R>
                      <:calendar:1000469260390375554> **Joined:** <t:${parseInt(interaction.member.joinedTimestamp / 1000)}:R>
                      <:bot:1000447056147652668> **Bot:** ${isBot}
                      <:discord:1000446649031729223> **Discord Badges:** ${badges}\n         
                      <:high:1000449582251130980> **Highest Role:** \n${highestRole}\n
                      <:role:1000449831157907556> **Roles:** \n${Roles}\n
                      <:perms:1000451083895849031> **Permissions:** \n\`\`\`ini\n[ ${memberPermissons} ]\`\`\``)
                      .setFooter({ text: '©️ IVON', iconURL: ('https://i.imgur.com/sB02Hbz.png') })
                    await interaction.reply({
                        content: `Information about **${member.user.tag}**`,
                        embeds: [UserInfoEm]
                    });
        }

    },
};
