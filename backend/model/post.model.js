const mongoose = require("mongoose");
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
const Post = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    like: {
      type: Number,
      default: 0,
    },
    contet: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
    },
    share: {
      type: Number,
      default: 0,
    },
    topic: {
      type: String,
      required: true,
      minlength: 3,
    },
    title: {
      type: String,
      required: true,
      minlength: 5,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", Post);
