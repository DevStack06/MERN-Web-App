const express = require("express");
const router = express.Router();
const Reply = require("../model/reply.model");
let middleware = require("../middleware");

//all comment
router.route("/all").get(async (req, res) => {
  await Reply.find({}, (err, comments) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(comments);
    }
  });
});

//getting a single comment of single user
router.route("/").get(middleware.checkToken, async (req, res) => {
  await Reply.find({ username: req.decoded.username }, (err, comments) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(comments);
    }
  });
});

router.route("/getreply:commentid").get(async (req, res) => {
  await Reply.find({ postid: req.params.commentid }, (err, replys) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(comments);
    }
  });
});

//adding a new user profile data
router
  .route("/add/:commentid")
  .post(middleware.checkToken, async (req, res) => {
    const reply = new Reply({
      username: req.decoded.username,
      postid: req.params.commentid,
      reply: req.body.reply,
    });
    reply
      .save()
      .then(() =>
        res.json({ Message: "reply added successfully !", data: reply })
      )
      .catch((err) => res.status(400).json({ Error: err }));
  });

//deleteing the comment data
router.route("/delete/:id").delete(middleware.checkToken, async (req, res) => {
  await Reply.findByIdAndRemove({ _id: req.params.id }, (err, comment) => {
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
  Reply.update(
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
  Reply.findById({ _id: req.params.id })
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
