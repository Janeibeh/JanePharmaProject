import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  
  image: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Referenced to the Category model because each product is grouped into a category, hence must carry an id for that category
    required: true,
  },

  isActive :  { type: Boolean, default :true},

  sku: {type: Number, default: 1},


  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product",  productSchema);
