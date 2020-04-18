const express = require("express");
const router = express.Router();
const Post = require("../model/post.model");
let middleware = require("../middleware");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ObjectId = mongoose.Types.ObjectId;
router.route("/all").get(async (req, res) => {
  await Post.find({}, (err, posts) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(posts);
    }
  });
});

//getting a single post of single user
router.route("/").get(middleware.checkToken, async (req, res) => {
  await Post.find({ username: req.decoded.username }, (err, posts) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(posts);
    }
  });
});

router.route("/getpost:id").get(middleware.checkToken, async (req, res) => {
  await Post.findById({ _id: req.params.id }, (err, post) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(post);
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

//update a post data
router.route("/update/:id").patch(middleware.checkToken, async (req, res) => {
  let post = {};
  await Post.findById({ _id: req.params.id }, (err, result) => {
    if (err) {
      post = err;
    } else {
      post = result;
    }
  });
  if (post == null) {
    return res.status(500).send({ messsaege: "Username invalid" });
  }
  await Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        content: req.body.content ? req.body.content : post.content,
        title: req.body.title ? req.body.title : post.title,
        topic: req.body.topic ? req.body.topic : post.topic,
      },
    },
    (err, post) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "Post successfully updated",
        data: post,
      };
      return res.status(200).send(response);
    }
  );
});

//deleteing the post data
router.route("/delete/:id").delete(middleware.checkToken, async (req, res) => {
  await Post.findByIdAndRemove({ _id: req.params.id }, (err, post) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Post successfully deleted",
      username: post.username,
    };
    return res.status(200).send(response);
  });
});

//increment like
router.route("/updatelike/:id").patch(async (req, res) => {
  Post.update({ _id: req.params.id }, { $inc: { like: 1 } }, (err, post) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "ok",
    };
    return res.status(200).send(response);
  });
});

//increment share
router.route("/updateshare/:id").patch(async (req, res) => {
  Post.update({ _id: req.params.id }, { $inc: { share: 1 } }, (err, post) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "ok",
    };
    return res.status(200).send(response);
  });
});

//get like
router.route("/getlike/:id").get(async (req, res) => {
  Post.findById({ _id: req.params.id })
    .select("like")
    .exec((err, like) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "ok",
        like: like,
      };
      return res.status(200).send(response);
    });
});

//get share
router.route("/getshare/:id").get(async (req, res) => {
  Post.findById({ _id: req.params.id })
    .select("share")
    .exec((err, share) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "ok",
        share: share,
      };
      return res.status(200).send(response);
    });
});

module.exports = router;
