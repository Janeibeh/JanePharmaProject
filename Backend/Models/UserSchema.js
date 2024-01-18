import mongoose from "mongoose";
import validator from "validator";

// User Schema (common fields for both patients and doctors)
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [[String]],
    enum: ['patient', 'doctor', 'admin', 'user'],
    default: ["user"],
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: (value) => {
      return validator.isMobilePhone(value, "en-NG");
    },
  },

  photo: {type: String},

  address: { type: {}, required: true }

});

// Create a model based on the schema
export default mongoose.model("User",  userSchema);

// Now 'User' is a Mongoose model that you can use to interact with the 'patient' collection in MongoDB
