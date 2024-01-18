import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model because each product added to a cart must have an id
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  isActive :  { type: Boolean, default :true},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Cart",  cartSchema);