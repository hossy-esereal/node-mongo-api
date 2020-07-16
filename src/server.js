'use strict';

const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT);
console.log(`Running on http://${PORT}`);

mongoose.connect(
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
