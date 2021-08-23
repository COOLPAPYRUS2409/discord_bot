module.exports = {
    name: "prune",
    description: "Prune up to 99 messages",
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply("That is not a vaild number.");
        } else if (amount <=1 || amount > 100) {
            return message.reply("You will need to input a number in between 1 to 99");
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.log(err);
            message.reply("There is a fatal error trying to prune messages.");
        });
    },
};