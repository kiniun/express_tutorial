//Http Post Request w/ Express and Body Parser Module
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
//in order to consume the input from webform, use module to parse the input from the html form
app.use('/public', express.static(path.join(__dirname, 'static'))); //to give alias name to an internal project folder
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

app.post('/', (req, res) => {
    console.log(req.body);
    //database work here
    res.send('successfully posted data');
})

app.listen(3000);