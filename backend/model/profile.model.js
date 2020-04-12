const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = Schema(
  {
    username: {
      type: String,
      minlength: 3,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      minlength: 3,
      required: true,
    },
    profession: {
      type: String,
      default: "",
    },
    interest: {
      type: String,
      default: "",
    },
    DOB: {
      type: String,
      minlength: 3,
      required: true,
    },
    titleline: {
      type: String,
      default: "",
    },
    about: {
      type: String,
      minlength: 3,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", Profile);
