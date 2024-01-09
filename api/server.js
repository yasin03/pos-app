const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const port = 5000;

// Routes
const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const invoiceRoute = require("./routes/invoices.js");
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");

dotenv.config();

const connect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log(error);
  }
};

// Middlewares

app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/invoice", invoiceRoute);
app.use("/api/auth", authRoute);
app.use("/api/auth", usersRoute);

app.get("/", (req, res) => {
  res.send("Hellooo!");
});

app.listen(port, () => {
  connect();
  console.log(`Express listening on port : ${port}`);
});
