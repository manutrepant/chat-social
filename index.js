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