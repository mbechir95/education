//import mongoose module
const mongoose = require("mongoose");

// create schema
const courseSchema = mongoose.Schema({

  nameCourse: String,
  descriptionCourse: String,
  durationCourse: String,
  idTeacher:String,
  fNameTeacher:String,
  lNameTeacher:String,
 
});

const course = mongoose.model("Course", courseSchema);

//make match exportable
module.exports = course;
