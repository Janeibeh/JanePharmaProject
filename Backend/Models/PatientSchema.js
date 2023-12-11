// Import Mongoose
// const mongoose = require('mongoose');
import mongoose from "mongoose";

// Define a schema
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  photo: {type: String},
  address: { type: {}, required: true },
  role : { type: String, 
    enum : ["patient","admin" ],
    default: "patient",
  },
  gender: {type: String, enum : ["male","female", "other"]},
  bloodType: {type: String},
  appointments: [{type :mongoose.Types.ObjectId, ref: "Appointment"}],
});

// Create a model based on the schema
export default mongoose.model("Patient",  patientSchema);

// Now 'Patient' is a Mongoose model that you can use to interact with the 'patient' collection in MongoDB
