import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },

  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart', // Reference to the Cart model
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  status :  { 
    type: String, 
    enum:["pending", "dispatched", "completed", "cancelled"], 
    default :"pending"
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
