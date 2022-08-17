const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    required: [true, "please provide your name"],
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
    name: {
      type: String,
      required: [true, "Please provide university name"],
    },
    area: String,
    zila: String,
    type: String,
  },
});

const Student = model("Student", studentSchema);
module.exports = Student;
