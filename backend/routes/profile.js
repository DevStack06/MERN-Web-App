const express = require("express");
const Profile = require("../model/profile.model");
let middleware = require("../middleware");
const router = express.Router();
const multer = require("multer");
var path = require("path");

//multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, req.decoded.username + ".jpg");
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

router.route("/all").get(async (req, res) => {
  await Profile.find({}, (err, profiles) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(profiles);
    }
  });
});

//getting a single user data
router.route("/").get(middleware.checkToken, async (req, res) => {
  await Profile.findOne({ username: req.decoded.username }, (err, profile) => {
    console.log(profile);
    if (err) {
      res.status(400).json({ error: err });
      console.log(err);
    } else {
      if (profile === null) {
        console.log("here");
        res.json();
      } else {
        res.json(profile);
        // res.json([]);
        console.log("here2");
      }
    }
  });
});

//adding a new user profile data
router.route("/add/").post(middleware.checkToken, async (req, res) => {
  console.log("inside profile");
  const profile = new Profile({
    username: req.decoded.username,
    name: req.body.name,
    profession: req.body.profession,
    interest: req.body.interest,
    DOB: req.body.DOB,
    titleline: req.body.titleline,
    about: req.body.about,
    img: "",
  });
  await profile
    .save()
    .then(() =>
      res.json({ Message: "Profile added successfully !", data: profile })
    )
    .catch((err) => res.status(400).json({ Error: err }));
});

//adding and update profile image
router
  .route("/add/image")
  .patch(middleware.checkToken, upload.single("img"), async (req, res) => {
    await Profile.findOneAndUpdate(
      { username: req.decoded.username },
      {
        $set: {
          img: req.file.path,
        },
      },
      { new: true },
      (err, user) => {
        if (err) return res.status(500).send(err);
        const response = {
          message: "image added successfully updated",
          data: user,
        };
        return res.status(200).send(response);
      }
    );
  });

//updating the profile data
router.route("/update/").patch(middleware.checkToken, async (req, res) => {
  let profile = {};
  await Profile.findOne({ username: req.decoded.username }, (err, result) => {
    if (err) {
      profile = err;
    } else {
      profile = result;
    }
  });
  if (profile == null) {
    return res.status(500).send({ messsaege: "Username invalid" });
  }
  console.log(req.decoded.username);
  await Profile.findOneAndUpdate(
    { username: req.decoded.username },
    {
      $set: {
        name: req.body.name ? req.body.name : profile.name,
        profession: req.body.profession
          ? req.body.profession
          : profile.profession,
        interest: req.body.interest ? req.body.interest : profile.interest,
        DOB: req.body.DOB ? req.body.DOB : profile.DOB,
        titleline: req.body.titleline ? req.body.titleline : profile.titleline,
        about: req.body.about ? req.body.about : profile.about,
      },
    },
    { new: true },
    (err, profile) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "Profile successfully updated",
        data: profile,
      };
      return res.status(200).send(response);
    }
  );
});

//deleteing the profile data
router.route("/delete/").delete(middleware.checkToken, async (req, res) => {
  await Profile.findOneAndRemove(
    { username: req.decoded.username },
    (err, profile) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "User successfully deleted",
        username: profile.username,
      };
      return res.status(200).send(response);
    }
  );
});
module.exports = router;
