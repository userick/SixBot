const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('ready', ()=> {
    console.log('Mira est Ok.')
});

                
client.login('NDI2ODUxMTMyODIwOTQ2OTQ1.DZcH2Q.AqhM4vfkS2CCFgNsWv3T9iNeeuY');

bot.on('message', message => {
    if message.content === 'ping') {
        message.channel.sendMessage("test");   
    }
    
});
