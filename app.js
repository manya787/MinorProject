const mongoose = require('mongoose');
const express = require('express');
const app = express();

main().catch(err => console.log(err));
    async function main() {
          await mongoose.connect('mongodb+srv://manyagarg787:minor@cluster0.qzeqzr2.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true}, {useCreateIndex: true}, {useUnifiedTopology: true}, {useFindAndModify:false});
        }

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

app.listen(3000, () => {
    
})
