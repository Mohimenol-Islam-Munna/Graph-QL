const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    required: [true, "please provide your name"],
    unique: [true, "please provide unique name"],
  },
  age: {
    type: Number,
  },
  cgpa: {
    type: Number,
    required: [true, "please provide your cgpa"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
    default: "Others",
  },
  university: {
    uName: {
      type: String,
      required: [true, "please provide university name"],
    },
    uArea: String,
    uZila: String,
    uType: String,
  },
});

const Student = model("Student", studentSchema);
module.exports = Student;
