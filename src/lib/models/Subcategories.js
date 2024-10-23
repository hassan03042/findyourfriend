import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategorySchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  category: { type: mongoose.Types.ObjectId, ref: "Categories" },
});

export const SubCategoryModal = mongoose.model(
  "Subcategories",
  subcategorySchema
);
