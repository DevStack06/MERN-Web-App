const express = require("express");
const router = express.Router();
const Post = require("../model/post.model");
let middleware = require("../middleware");

router.route("/all").get(async (req, res) => {
  await Post.find({}, (err, profiles) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(profiles);
    }
  });
});

//getting a single user data
router.route("/").get(middleware.checkToken, async (req, res) => {
  await Post.findOne({ username: req.decoded.username }, (err, profile) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(profile);
    }
  });
});

//adding a new user profile data
router.route("/add/").post(middleware.checkToken, async (req, res) => {
  const profile = new Post({
    username: req.decoded.username,
    content: req.body.content,
    topic: req.body.topic,
    title: req.body.title,
  });
  profile
    .save()
    .then(() =>
      res.json({ Message: "Profile added successfully !", data: profile })
    )
    .catch((err) => res.status(400).json({ Error: err }));
});
