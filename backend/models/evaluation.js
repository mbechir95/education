//import mongoose module
const mongoose = require("mongoose");

// create schema
const evaluationSchema = mongoose.Schema({


  nameCourse: String,
  idCourse: String,
  durationCourse: String,
  firstNameTeacher: String,
  lastNameTeacher: String,
  idStudent: String,
  idTeacher: String,
  eval: String,
  note: Number,
 
});

const evaluation = mongoose.model("Evaluation", evaluationSchema);

//make match exportable
module.exports = evaluation;
