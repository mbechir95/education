//import mongoose module
const mongoose = require("mongoose");

// create schema
const sessionSchema = mongoose.Schema({

  nameCourse: String,
  idCourse: String,
  idTeacher:String,
  durationCourse: String,
  firstNameTeacher:String,
  lastNameTeacher:String,
  idStudent:String,
  fNameStudent:String,
  lNameStudent:String,
  
 
});

const session = mongoose.model("Session", sessionSchema);

//make match exportable
module.exports = session;
