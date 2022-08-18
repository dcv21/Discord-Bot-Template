const fs = require('fs');
const { Collection } = require('discord.js');

module.exports = client => {
    client.commands = new Collection();
    const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    commands.forEach(file => {
        const command = require(`../commands/${file}`);
        client.commands.set(command.data.name, command);
    });
}