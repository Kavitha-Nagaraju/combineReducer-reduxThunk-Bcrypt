const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcrypt");

let app = express();
app.use(cors());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  password: String,
  mobileNo: String,
  profilePic: String,
});
let User = new mongoose.model("user", userSchema, "UsersData");

app.post("/signup", upload.single("profilePic"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  try {
    let hashedPassword = await bcrypt.hash(req.body.password,10);
    let newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
      password: hashedPassword,
      mobileNo: req.body.mobileNo,
      profilePic: req.file.path,
    });
    await User.insertMany([newUser]);
    res.json({ status: "Success", msg: "User Data Created successfully" });
  } catch (error) {
    res.json({ status: "Failed", msg: "Unable to create user data",error });
  }
});

app.post("/login", upload.none(), async (req, res) => {

  let result = await User.find().and({ email: req.body.email });
  try {
    if (result.length > 0) {

    let isPasswordCorrect = await bcrypt.compare(req.body.password,result[0].password);
    //   if (result[0].password == req.body.password) {
    if(isPasswordCorrect==true){
        res.json({ status: "success", data: result[0] });
      } else {
        res.json({ status: "Failed", msg: "Invalid password" });
      }
    } else {
      res.json({ status: "Failed", msg: "Invalid Email" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(2024, async () => {
  console.log("listen to the port 2024");
});

let connectedToMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nagarajukavibhavi:nagarajukavibhavi@cluster0.okjzs.mongodb.net/reducer?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MDB successfully");
  } catch (error) {
    console.log("Unable to connect to MDB");
    console.log(error);
  }
};
connectedToMDB();
