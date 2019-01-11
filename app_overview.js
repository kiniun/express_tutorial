const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);

//Working with Express Get Request
app.get('/example', (req, res) => {
    res.send('Hitting example route');
});

//Route params
app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    //Query strings
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});

//Route vs Query string
//use route when data is required
//QS - optional

