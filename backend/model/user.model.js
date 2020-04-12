const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 5,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", User);
