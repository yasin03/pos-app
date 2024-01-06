const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = 5000;
dotenv.config();

const connect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log(error);
  }
};

app.listen(port, () => {
  connect();
  console.log(`Express listening on port : ${port}`);
});
