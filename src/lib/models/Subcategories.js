import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategorySchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
});

export const SubCategoryModal = mongoose.models.Subcategories || mongoose.model(
  "Subcategories",
  subcategorySchema
);
