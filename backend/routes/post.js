const express = require("express");
const router = express.Router();
const Post = require("../model/post.model");
let middleware = require("../middleware");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ObjectId = mongoose.Types.ObjectId;
router.route("/all").get(async (req, res) => {
  await Post.find({}, (err, profiles) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(profiles);
    }
  });
});

//getting a single post of single user
router.route("/:username").get(middleware.checkToken, async (req, res) => {
  await Post.find({ username: req.decoded.username }, (err, profile) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(profile);
    }
  });
});

//adding a new user profile data
router.route("/add/").post(middleware.checkToken, async (req, res) => {
  const _id = new ObjectId();
  console.log("getpost" + "/" + _id);
  const post = new Post({
    _id: _id,
    username: req.decoded.username,
    content: req.body.content,
    topic: req.body.topic,
    title: req.body.title,
    url: "getpost" + "/" + _id,
  });
  post
    .save()
    .then(() => res.json({ Message: "Post added successfully !", data: post }))
    .catch((err) => res.status(400).json({ Error: err }));
});

module.exports = router;
