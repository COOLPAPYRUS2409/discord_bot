module.exports = {
    name: "number",
    description: "Let bot send to the message",
    execute(message, args) {
        const Fruits = [
            ":grape:",
            ":mango:",
            ":coconut:",
            ":pear:",
            ":strawberry:"
        ];

        const Fruit = Math.floor(Math.random() * Fruits.length);
        message.channel.send(Fruit)
    },
};