const http = require('http');
const axios = require('axios');
const express = require('express');

class Bear {
    constructor(type, weight, teeth) {
        this.type = type;
        this.weight = weight;
        this.teeth = teeth;
    }
};

const sampleBear = new Bear('Polar bear', '2000lb', 'very sharp teeth');

const app = express();

app.use('/api', (req, res, next) => {
    res.send(sampleBear);
});

app.use('/', (req, res, next) => {
    res.send("<h1 style='color:#606;'>HELLO! WELCOME TO MY SERVER!</h1>");
});

app.listen(5000);