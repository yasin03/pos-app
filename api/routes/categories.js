const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json({ message: "Item added successfully!", newCategory });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/get-all", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update-category", async (req, res) => {
  try {
    const updatedCategory = await Category.findOneAndUpdate(
      { _id: req.body.categoryId },
      req.body
    );
    res
      .status(200)
      .json({ message: "Item updated successfully.", updatedCategory });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/delete-category", async (req, res) => {
  try {
    const deletedCategory = await Category.findOneAndDelete({
      _id: req.body.categoryId,
    });
    res
      .status(200)
      .json({ message: "Item deleted successfully.", deletedCategory });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
