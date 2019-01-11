//User Input Validation w/ Express and JOI
const joi = require('joi');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static'))); 
app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res) => {
    // console.log(req.body);
    const schema = joi.object().keys({
        email : joi.string().trim().email().required(),
        password : joi.string().min(5).max(10).required()
    });
    joi.validate(req.body, schema, (err, result) => {
        if(err) {
            res.send('An error has occurred.');
        }
        console.log(result);
        res.send('successfully posted data');
    });
});

app.listen(3000);