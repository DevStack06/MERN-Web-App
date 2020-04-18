const express = require("express");
const router = express.Router();
const Comment = require("../model/comment.model");
let middleware = require("../middleware");

//all comment
router.route("/all").get(async (req, res) => {
  await Comment.find({}, (err, comments) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(comments);
    }
  });
});

//getting a single comment of single user
router.route("/").get(middleware.checkToken, async (req, res) => {
  await Comment.find({ username: req.decoded.username }, (err, comments) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(comments);
    }
  });
});

router.route("/getcomments:postid").get(async (req, res) => {
  await Comment.find({ postid: req.params.postid }, (err, comments) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(comments);
    }
  });
});

//adding a new user profile data
router.route("/add/:postid").post(middleware.checkToken, async (req, res) => {
  const comment = new Comment({
    username: req.decoded.username,
    postid: req.params.postid,
    comment: req.body.comment,
  });
  comment
    .save()
    .then(() =>
      res.json({ Message: "comment added successfully !", data: comment })
    )
    .catch((err) => res.status(400).json({ Error: err }));
});

//deleteing the comment data
router.route("/delete/:id").delete(middleware.checkToken, async (req, res) => {
  await Comment.findByIdAndRemove({ _id: req.params.id }, (err, comment) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "comment successfully deleted",
      username: comment.username,
    };
    return res.status(200).send(response);
  });
});

//increment like
router.route("/updatelike/:id").patch(async (req, res) => {
  Comment.update(
    { _id: req.params.id },
    { $inc: { like: 1 } },
    (err, comment) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "ok",
      };
      return res.status(200).send(response);
    }
  );
});

//get like
router.route("/getlike/:id").get(async (req, res) => {
  Comment.findById({ _id: req.params.id })
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

module.exports = router;
