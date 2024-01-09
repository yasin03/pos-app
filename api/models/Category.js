const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    title: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;
