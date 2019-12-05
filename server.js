/* MODULES */
const path = require('path')
const express = require('express')
const io = require('socket.io')
const Filter = require('bad-words')
const app = express()

/* GLOBAL CONSTANTES */
const PORT = process.env.PORT || 5000

/* STATIC PUBLIC FILES (middleware) */
app.use(express.static(path.join(__dirname, 'public')))

/* SOCKET.io */
const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

/* SOCKET MESSAGES */