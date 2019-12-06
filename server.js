/* MODULES */
const path = require('path')
const http = require('http')
const express = require('express')
const io = require('socket.io')
const hbs = require('hbs')
const moment = require('moment')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const Filter = require('bad-words')


/* ROUTE */
const loginRouter = require('./routes/login')
const chatRouter = require('./routes/chat')




/* ENVIRONEMENT */
const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 5000
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')




app.use('/', loginRouter)
app.use('/chat', chatRouter)




/* MIDDLWARE */
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))






server.listen(PORT, () => console.log('Server is running on port ${PORT}'))
io.listen(server)


