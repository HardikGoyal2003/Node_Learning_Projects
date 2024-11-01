function getMessages(req, res) {
    res.send("<h1>Headlines</h1>")
}

function postMessages(req, res) {
    console.log("Updating.....")
}

module.exports = {
    getMessages,
    postMessages
};