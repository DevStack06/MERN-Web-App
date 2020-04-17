const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
const Post = Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
    },
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
    content: {
      type: String,
      required: true,
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
