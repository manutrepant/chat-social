<<<<<<< HEAD
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
=======
// MODULE CONFIG
const express = require('express');
const path = require('path');
const app = express();


// PORT LOCAL (NULL LOCAL) ou 5000 et déploiement
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('coucou');

})

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
>>>>>>> 8d85940cf0722fe108cd00268f84aff98f660d05
