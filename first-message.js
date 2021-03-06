const addReactions = (message, reactions) => {
    message.react(reactions[0])
    reactions.shift();
    if (reactions.length > 0) {
        setTimeout(() => addReactions(message, reactions), 750)
    }
}

module.exports = async (client, id, text, reactions = []) => {
    const channel = await client.channels.fetch(id)

    channel.messages.fetch().then((messages) => {
        if (client.on) {
            //send a new message
            channel.send(text).then(message => {
                addReactions(message, reactions);

            })
        } else {
            //edit the message
        }
    })
};