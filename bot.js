const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`مهما تعدّدت النّساء حبيبتي فالأصل أنت `,'https://www.twitch.tv/MeeRcY')

});
client.login(process.env.BOT_TOKEN);
