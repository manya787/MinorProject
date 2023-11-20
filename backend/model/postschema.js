const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { link } = require("../router/auth");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const postschema = new mongoose.Schema({
  post_id: {
    type: String,
    default: uuidv4(),
    unique: true,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PUSER",
    require: true,
  },
  Topic: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Profession: {
    type: String,
    required: true,
  },
  Workplace: {
    type: String,
    required: true,
  },
  Aboutcompany: {
    type: String,
    required: true,
  },
  Requirepost: {
    type: String,
    required: true,
  },
  Aboutpost: {
    type: String,
    required: true,
  },
  Skill1: {
    type: String,
    required: true,
  },
  Skill2: {
    type: String,
    required: true,
  },
  Skill3: {
    type: String,
    required: true,
  },
  Skill4: {
    type: String,
    required: true,
  },
  Certification1: {
    type: String,
    required: true,
  },
  Certification2: {
    type: String,
    required: true,
  },
  Numberofopenings: {
    type: Number,
    required: true,
  },
  Stipend: {
    type: Number,
    required: true,
  },
  Duration: {
    type: String,
    required: true,
  },
  StartDate: {
    type: Date,
    required: true,
  },
  Perk1: {
    type: String,
    required: true,
  },
  Perk2: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Linkedin: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

console.log("hi from inside");

const Post = mongoose.model("POST", postschema);

module.exports = Post;
