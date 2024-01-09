const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();

router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json({ message: "Item added successfully!", newProduct });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/get-all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update-product", async (req, res) => {
  try {
    const updatedProduct = req.body;
    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body);
    res
      .status(200)
      .json({ message: "Item updated successfully.", updatedProduct });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/delete-product", async (req, res) => {
  try {
    //const deletedProduct = Product.findById(req.body.productId);
    await Product.findOneAndDelete({
      _id: req.body.productId,
    });
    res.status(200).json("Item deleted successfully.");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
