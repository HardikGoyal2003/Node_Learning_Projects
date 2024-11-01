const friendsModel = require('../models/friends.model')

function getFriends(req, res) {
    res.json(friendsModel.friends)
}

function postFriends(req, res) {
    if(!req.body.name){
        return res.status(400).json({
            error:'Missing friend name'
        })
    }
    const newFriend = {
        name: req.body.name,
        id: friendsModel.friends.length
    }

    friendsModel.friends.push(newFriend);
    res.json(newFriend);
}

function getOneFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = friendsModel.friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error:"Friend not found!"
        });
    }
}

module.exports = {
    getFriends,
    postFriends,
    getOneFriend
}

