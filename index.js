// Require the necessary discord.js classes
const fs = require('fs');
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.config = require('./config.json');

const files = fs.readdirSync('./handlers').filter(file => file.endsWith('.js'));

for (const file of files) {
    const handler = require(`./handlers/${file}`);
    handler(client);
}

// Login to Discord with your client's token
client.login(client.config.token);