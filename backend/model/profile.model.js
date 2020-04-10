const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = Schema(
  {
    username: {
      type: String,
      minlength: 3,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      minlength: 3,
      require: true,
    },
    profession: {
      type: String,
      minlength: 3,
    },
    interest: {
      type: String,
      minlength: 3,
    },
    DOB: {
      type: Date,
      minlength: 3,
      require: true,
    },
    titleline: {
      type: String,
      minlength: 3,
    },
    about: {
      type: String,
      minlength: 3,
      require: true,
    },
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", Profile);
