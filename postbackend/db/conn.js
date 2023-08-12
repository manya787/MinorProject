 const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.DB || "");
}


