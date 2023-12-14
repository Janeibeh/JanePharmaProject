// Import Mongoose
import mongoose from "mongoose";
import validator from "validator";

// Define a schema
const patientSchema = new mongoose.Schema({

  user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },

  gender: {type: String, enum : ["male","female", "other"] },

  bloodType: {type: String},

  appointments: [{type :mongoose.Types.ObjectId, ref: "Appointment"}],

  prescriptions: [
                  {
                    drugName: {type: String, required: true},
                    dosage: { type: String,},
                  },
                ],
              });

// Create a model based on the schema
export default mongoose.model("Patient",  patientSchema);

// Now 'Patient' is a Mongoose model that you can use to interact with the 'patient' collection in MongoDB
