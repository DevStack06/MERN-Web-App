const express = require("express");
const User = require("../../model/user.model");
let jwt = require("jsonwebtoken");
let config = require("../../config");
let middleware = require("../../middleware");
const router = express.Router();

router.route("/all").get((req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(result);
    }
  });
  // console.log(users);
  // res.send("ok");
});

router.route("/login").post(async (req, res) => {
  await User.findOne(
    { $or: [{ username: req.body.username }, { email: req.body.username }] },
    (err, user) => {
      if (user == null) {
        res.status(403).json({
          success: false,
          message: "Incorrect username or password",
        });
      } else {
        if (user.password == req.body.password) {
          let token = jwt.sign({ username: req.body.username }, config.secret, {
            expiresIn: "24h", // expires in 24 hours
          });
          // return the JWT token for the future API calls
          res.json({
            success: true,
            message: "Authentication successful!",
            token: token,
          });
        } else {
          res.status(403).json({
            success: false,
            message: "Incorrect username or password",
          });
        }
      }
    }
  );
});

router.route("/register").post(async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  await user
    .save()
    .then(() => res.json(user))
    .catch((err) => res.status(400).json({ Error: err }));
});

router.route("/delete/").delete(middleware.checkToken, async (req, res) => {
  await User.findOneAndRemove(
    { username: req.decoded.username },
    (err, user) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "User successfully deleted",
        username: user.username,
      };
      return res.status(200).send(response);
    }
  );
  // console.log(req.params.username);
  //example http://localhost:5000/user/delete/ram1233
});

router.route("/update/:username").patch(async (req, res) => {
  await User.findOneAndUpdate(
    { username: req.params.username },
    { $set: { password: req.body.password } },
    { new: true },
    (err, user) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "Password successfully updated",
        username: user.username,
      };
      return res.status(200).send(response);
    }
  );
  // console.log(req.params.username);
  //example http://localhost:5000/user/delete/ram1233
});

module.exports = router;
