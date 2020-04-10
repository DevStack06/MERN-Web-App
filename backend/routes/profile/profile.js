const express = require("express");
const Profile = require("../../model/profile.model");
let middleware = require("../../middleware");
const router = express.Router();
const multer = require("multer");

//multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || ile.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 6,
  },
  fileFilter: fileFilter,
});

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

router
  .route("/add/:username")
  .post(middleware.checkToken, upload.single("img"), async (req, res) => {
    const profile = new Profile({
      username: req.params.username,
      name: req.body.name,
      profession: req.body.profession,
      interest: req.body.interest,
      DOB: req.body.DOB,
      titleline: req.body.titleline,
      about: req.body.about,
      img: req.file.path,
    });
    profile
      .save()
      .then(() => res.json({ Message: "Profile added successfully !" }))
      .catch((err) => res.status(400).json({ Error: err }));
  });

router
  .route("/update/:username")
  .patch(middleware.checkToken, async (req, res) => {
    res.json("we will do that later");
  });

router
  .route("/delete/:username")
  .delete(middleware.checkToken, async (req, res) => {
    await Profile.findOneAndRemove(req.params.username, (err, user) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "User successfully deleted",
        username: user.username,
      };
      return res.status(200).send(response);
    });
  });
module.exports = router;
