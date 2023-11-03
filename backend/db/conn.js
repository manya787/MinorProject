// const mongoose = require("mongoose");
// const express = require("express");
// const dotenv = require("dotenv");

// dotenv.config();

// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect(process.env.DB || "");
// }

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

module.exports = connectToDatabase;
