const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.Port || 5000;

const mongoose = require("mongoose");

//database connection
mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () =>
  console.log("mongoDB connection eastablished succesfully")
);

//middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());
//routes
const userroute = require("./routes/user");
const profileroute = require("./routes/profile");
const postroute = require("./routes/post");
app.use("/user", userroute);
app.use("/profile", profileroute);
app.use("/post", postroute);
//acknoledge api
app.get("/", (req, res) =>
  res.json({ message: "Welcome you are in the main page :)" })
);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`your app is running on port ${PORT} enjoy developing`)
);
