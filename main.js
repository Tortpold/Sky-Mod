const Discord = require('discord.js');
const token = 'Mzg5NDU2MDk2Mjg2MzQzMTY4.DQ70xQ.sUflDuyt6CKn7kyVhtT3cbIORxQ';

var bot = new Discord.Client();
var prefix = ("&")

bot.on('ready', () =>{
    bot.user.setPresence({ game: { name: 'Joue à être dev'}});
    console.log("Bot Ready !");
})

bot.login('Mzg5NDU2MDk2Mjg2MzQzMTY4.DQ70xQ.sUflDuyt6CKn7kyVhtT3cbIORxQ');

bot.on('message', message => {
    if (message.content === prefix + "ping"){
        message.reply("pong");
        console.log('Commande ping pong Effectuée !');
    }
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Bienvenue ${member} sur ${guild}`);
});

bot.on('message', message => {
    if (message.content === prefix + "avatar"){
        message.reply(message.author.avatarURL)
        console.log('Commande &avatar effectuée !')
    }
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Bienvenue ${member} sur ${guild}`);
});