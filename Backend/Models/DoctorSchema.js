// const mongoose = require("mongoose")
import mongoose from "mongoose";
import validator from "validator";

const doctorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    photo:{ type: String},
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
    // appointments: [
    //     {  type:  mongoose.Types.ObjectId, ref: "Appointment"},
    //     //    patient: {
    //     //       type: mongoose.Schema.Types.ObjectId,
    //     //       ref: 'User',
    //     //     },
    //     appointmentDate: { type: Date, required: true },
    // ],
})


export default mongoose.model("Doctor", doctorSchema)

