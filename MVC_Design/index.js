const messagesControllers = require('./controllers/messages.controllers')


const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const express = require('express')
const app = express()
PORT = 3000

app.use((req, res, next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

app.use(express.json())

app.use('/friends', friendsRouter.friendsRoutes)
app.use('/messages', messagesRouter.messagesRoutes)




app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}...`)
})