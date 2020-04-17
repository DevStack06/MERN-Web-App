const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reply = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    commentid: {
      type: String,
      required: true,
      unique: true,
    },
    reply: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reply", Reply);
