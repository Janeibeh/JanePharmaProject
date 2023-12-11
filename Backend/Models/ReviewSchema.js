// const mongoose = require("mongoose")
import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    review :{type: String , maxLength:50 },
})

export default mongoose.model ("Review", reviewSchema )