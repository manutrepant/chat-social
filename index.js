/* MODULES */
const express = require('express')
const path = require('path')
const io = require('socket.io')(server)
const app = express()

/* GLOBAL CONSTANTES */
const PORT = process.env.PORT || 5000

/* TEMPLATE ENGINE & MIDDLEWARES */
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))


/* SERVER */
app.get('/', (req, res) => {
    res.render('index')
})

/* LISTEN */
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

/* SOCKET.io */
// io.on('connect', (socket) => {
//     console.log('New user connected (server side')
// })