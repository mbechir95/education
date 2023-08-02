//import mongoose module
const mongoose = require("mongoose");

// create schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confPassword: String,
  avatar: String,
  role: String,
  status: String,
  tel: Number,
  confTel: Number,
  speciality:String,
});

const user = mongoose.model("User", userSchema);

//make match exportable
module.exports = user;
