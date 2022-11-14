const mongoose = require("mongoose");
const validator = require("validator");

const authorSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please submit author first name"],
      lowerCase: true,
      trim: true,
    },
    lname: {
      type: String,
      required: [true, "Please submit author last name"],
      lowerCase: true,
      trim: true,
    },
    title: {
      type: String,
      emun: ["Mr", "Mrs", "Miss"],
      require: [true, "Please enter title for name"],
    },
    email: {
      type: String,
      unique: [true, "Email id already exists"],
      required: [true, "Please enter your mail id!"],
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email!"],
    },
    password: {
      type: String,
      require: [true, "Please enter a password"],
      minlength: 10,
      maxlength: 25,
    },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Author", authorSchema);
