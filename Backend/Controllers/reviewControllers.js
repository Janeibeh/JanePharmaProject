import ReviewSchema from "../Models/ReviewSchema.js";
import DoctorSchema from "../Models/DoctorSchema.js";

export const getAllReviews = async(req, res) => {
    
    try {
        const reviews = await ReviewSchema.find({})
        res.status(200).json({success:"true", message:"Succesful", data:"reviews"})

    } catch (error) {
        res.status(401).json({success:"false", message:"Not found"})
    }
}

export const createReviews = async(req, res) => {

    if(!req.body.doctor) req.body.doctor= req.params.doctorId;
    if(!req.body.user) req.body.user= req.params.userId
    
    const newReview = new Review(req.body)


    try {
        const savedReview = await newReview.save()
        await DoctorSchema.findByIdAndUpdate(req.body.doctor, {
            $push: {reviews: savedReview._id}
        })
   
        res.status(200).json({success:"true", message:"Review submitted", data:"savedReview"})

    } catch (error) {
        res.status(500).json({success:"false", message:err.message})
    }
}