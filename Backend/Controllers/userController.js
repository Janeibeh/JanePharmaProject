import UserSchema from "../Models/UserSchema.js";
import BookingSchema from "../Models/BookingSchema.js";
import DoctorSchema from "../Models/DoctorSchema.js";

export const updateUser = async (req, res) => {
    const id = req.params.id; // Corrected destructuring syntax

    try {
        // It's good practice to store the updated user in a variable
        const updatedUser = await UserSchema.findByIdAndUpdate(id, {$set: req.body}, { new: true });

        // Optionally, check if the user was found and updated
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" , data:"updatedUser"});
        }

        res.status(200).json({ success: true, message: "Successfully updated" });
    }
    
    catch (err)  {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id; // Corrected destructuring syntax

    try {
      
        const updatedUser = await UserSchema.findByIdAndDelete(id);


        if (!deleteUser) {
            return res.status(404).json({ success: false, message: "User not deleted" });
        }

        res.status(200).json({ success: true, message: "Successfully deleted" });
    } 

    catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};

export const getSingleUser = async (req, res) => {
    const id = req.params.id; // Corrected destructuring syntax

    try {
        const getSingleUser = await UserSchema.findById(id).select("-password");

    
        if (!getSingleUser) {
            return res.status(404).json({ success: false, message: "Not found",  data:"user" });
        }

        res.status(200).json({ success: true, message: "users found" });
    }
    
    catch (err) {
        res.status(500).json({ success: false, message: "Not found" });
    }
};


export const getAllUsers = async (req, res) => {
    const id = req.params.id; // Corrected destructuring syntax

    try {
        const users = await UserSchema.find({}).select("-password");

    
        if (!users) {
            return res.status(404).json({ success: false, message: "No user found",  data:"users" });
        }

        res.status(200).json({ success: true, message: "User found", users });
    }
    
    catch (err) {
        res.status(500).json({ success: false, message: "No user found" });
    }
};


export const getUserProfile = async (req, res) => {
    const user = req.user_id; // Corrected destructuring syntax

    try {
        const user = await UserSchema.findById({user_id});

    
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found",   });
        }

        // if user exist, extract password and the rest from the user doc object
        const {password, ...rest} = user._doc

        res.status(200).json({ success: true, message: "Getting profile information", data:{...rest} });

    } 
    catch (err) {      
        res.status(500).json({ success: false, message: "Something went wrong, cannot get" });
    }
};


export const getMyAppointments = async (req, res) => {
    console.log('User', req)
    const bookings = req.user_id; // Corrected destructuring syntax

    try {

        //Step 1:  retrieve Appointments from bookings for each user
        const bookings = await BookingSchema.findById({user:req.user_id})

    
        //Step 2:  Extract doctors id's from the Appointments booked 
        const doctorsIds = bookings.map(el => el.availability)
        console.log('Doctires', doctorsIds)

        //Step 3: retrieve doctors using doctors ids and  use .select("-password") to remove the password while retriving only doctors
        const doctors = await DoctorSchema.find({_id: {$in:doctorsIds}}).select("-password");
        
        res.status(200).json({ success: true, message: "Getting Appointments", data:doctors });

    } 

    catch (err) {
        res.status(500).json({ success: false, message: "Something went wrong, cannot get" });
    }
};

