// const mongoose = require("mongoose")
import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },


    review :{type: String , maxLength:50 },

    createdAt: {
        type: Date,
        default: Date.now,
      },
    
      updatedAt: {
        type: Date,
        default: Date.now,
      },
})

export default mongoose.model ("Review", reviewSchema )