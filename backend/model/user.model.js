const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 5,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", User);
