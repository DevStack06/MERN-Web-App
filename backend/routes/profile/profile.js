const express = require("express");
const Profile = require("../../model/profile.model");
let middleware = require("../../middleware");
const router = express.Router();

router.route("/").get(async (req, res) => {
  await Profile.find({}, (err, profiles) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(profiles);
    }
  });
});

router.route("/:username").get(middleware.checkToken, async (req, res) => {
  await Profile.findOne(req.params.username, (err, profile) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(profile);
    }
  });
});

router.route("/add:username").post(middleware.checkToken, async (req, res) => {
  const profile = new Profile({
    username: req.params.username,
    name: req.body.name,
    profession: req.body.profession,
    interest: req.body.interest,
    DOB: req.body.DOB,
    titleline: req.body.titleline,
    about: req.body.about,
  });
  profile.img.data = fs.readFileSync(req.files.userPhoto.path);
  profile.img.contentType = "image/png";
  profile
    .save()
    .then(() => res.json({ Message: "Profile added successfully !" }))
    .catch((err) => res.status(400).json({ Error: err }));
});

router
  .route("/update:username")
  .get(middleware.checkToken, async (req, res) => {
    res.json("we will do that later");
  });

router
  .route("/delete:username")
  .get(middleware.checkToken, async (req, res) => {
    await Profile.findOneAndRemove(req.params.username, (err, user) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "User successfully deleted",
        username: user.username,
      };
      return res.status(200).send(response);
    });
  });
