'use strict';

const express = require('express');
const mongoose = require('mongoose');

const personController = require('./controllers/personController');

const PORT = 3000;

const app = express();
app.get('/', personController.getAllPersons, (req, res) => {
    console.log('get request on root');
    res.send(req.data);
});

app.listen(PORT);
console.log(`Running on http://${PORT}`);

mongoose.set('useCreateIndex', true)
    .connect(
        'mongodb://mongo-db:27017',
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    ).catch(e => console.log(e));

const db = mongoose.connection;
db.once('open', () => {
    console.log('Success MongoDB connected!!');
});
