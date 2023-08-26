const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config();

dotenv.config({ path: "/.env" });


require("./db/conn");

// const User = require('./model/postschema');

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

app.get("/createpost", middlepart, (req, res) => {
  res.cookie("Test", "minor");
  res.send(`Hello`);
});

app.get("/postt", (req, res) => {
  res.send(`post`);
});

app.get("/creapost", (req, res) => {
  res.send(`Hell`);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
