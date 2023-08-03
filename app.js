const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

const PORT = process.env.PORT;


// Middlepart
const middlepart = (req, res, next) => {
    console.log(`m`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello`);
})

app.get('/search', middlepart, (req, res) => {
    res.send(`Hello`);
})

app.get('/post', middlepart, (req, res) => {
    res.send(`Hello`);
})

app.get('/signin', (req, res) => {
    res.send(`Hello`);
})

app.get('/signup', (req, res) => {
    res.send(`Hello`);
})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})
