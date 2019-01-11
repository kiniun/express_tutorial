//Serving static files using Express
const express = require('express');
const path = require    ('path');
const app = express();
app.use('/public', express.static(path.join(__dirname, 'static'))); //to give alias name to an internal project folder
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

app.listen(3000);