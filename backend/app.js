const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config();

dotenv.config({ path: "/config.env" });

// console.log("DB URI from .env:", process.env.DB); // Debugging line
// console.log("PORT from .env:", process.env.PORT); // Debugging line

// dotenv.config({path:'/config.env'});

require("./db/conn");

// const User = require('./model/userschema');

app.use(express.json());

// we link router files to make route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middlepart
const middlepart = (req, res, next) => {
  console.log(`m`);
  next();
};

// app.get('/', (req, res) => {
//     res.send(`Hello`);
// })

app.get("/search", middlepart, (req, res) => {
  res.send(`Hello`);
});

app.get("/post", middlepart, (req, res) => {
  res.cookie("Test", "minor");
  res.send(`Hello`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello`);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
