'use strict';

const express = require('express')
const app = express(),
    bodyParser= require('body-parser');

app.use(bodyParser.json());

// CRUD = C (post), R (get), U (put), D (delete)

app.get('/ping',
    (req, res) => {
    res.status(200).send('pong');
})

app.use('/', require('./routes'));

app.listen(process.env.PORT || 4000,  () =>{
    console.log('app is running')
})