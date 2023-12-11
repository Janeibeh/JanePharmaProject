// const mongoose = require("mongoose")
import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, lowercase: true, validate: (value) => {
                        return validator.isEmail(value)}
            },
    password: { type: String, required: true,  unique: true,},
    phone : { type: Number},
    photo: {type: String},
    role : { type: String},
    specialization:{ type: String},
    qualifications: { type: Array},
    experience : { type: Array},
    bio  : { type: String, maxLength:50 },
    about  : { type: String},
    timeSlots : { type: Array},
    ticketPrice: { type: Number},
    reviews :[{  type:  mongoose.Types.ObjectId, ref: "Review"}],
    averageRating : { type: Number, default: 0},
    totalRating : { type: Number, default: 0},
    isApproved :  { type: String, enum:["pending", "approved", "cancelled"], default :"pending"},
    appointments: [{  type:  mongoose.Types.ObjectId, ref: "Appointment"}],
})


export default mongoose.model("Doctor", doctorSchema)