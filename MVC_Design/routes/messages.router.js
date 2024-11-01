const express = require('express')
const messagesControllers = require('../controllers/messages.controllers')

const messagesRoutes = express.Router();

messagesRoutes.get('/', messagesControllers.getMessages)
messagesRoutes.post('/', messagesControllers.postMessages)

module.exports = {
    messagesRoutes
}

