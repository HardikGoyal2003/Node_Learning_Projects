const express = require('express')
const friendsControllers = require('../controllers/friends.controllers')

const friendsRoutes = express.Router();

friendsRoutes.get('/', friendsControllers.getFriends)
friendsRoutes.post('/', friendsControllers.postFriends)
friendsRoutes.get('/:friendId', friendsControllers.getOneFriend)


module.exports = {
    friendsRoutes
}