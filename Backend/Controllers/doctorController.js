import DoctorSchema from "../Models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
    const id = req.params.id; // Corrected destructuring syntax

    try {
        // It's good practice to store the updated user in a variable
        const updateDoctor = await DoctorSchema.findByIdAndUpdate(id, {$set: req.body}, { new: true });

        // Optionally, check if the user was found and updated
        if (!updateDoctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" , data:"updateDoctor"});
        }

        res.status(200).json({ success: true, message: "Successfully updated" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

export const deleteDoctor = async (req, res) => {
    const id = req.params.id; // Corrected destructuring syntax

    try {
        const deleteDoctor = await DoctorSchema.findByIdAndDelete(id);


        if (!deleteDoctor) {
            return res.status(404).json({ success: false, message: "Doctor not deleted" });
        }

        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id; // Corrected destructuring syntax

    try {
        const doctor = await DoctorSchema.findById(id).populate('user').exec();

    
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Not found" });
        }
        res.status(200).json({ success: true, message: "Doctor found", doctor });
    } catch (err) {
        res.status(500).json({ success: false, message: "Not found" });
    }
};


export const getAllDoctors = async (req, res) => {
    try {

       // To search for a doctor in all doctors
            // const { query } = req.query;
        // let doctors;

            // if (query) {
            //             doctors = await DoctorSchema.find({
            //                 // isApproved: "approved",
            //                 $or: [
            //                         { name: { $regex: query, $options: "i" } },
            //                         { specialization: { $regex: query, $options: "i" } },
            //                     ]
            //                 }).select("-password");                          
            //             } 
            //             else 
            //             {
            //                 doctors = await DoctorSchema.find({isApproved: "approved"}).select("-password");
            //             }

        //THE doctors hold the doctor data in the mongoose database
        //populate the user reference  inside th doctorSchema
        let doctors = await DoctorSchema.find().populate('user').exec();
        
        res.status(200).json({ success: true, message: "Doctors found", doctors });
    } catch (err) {
        res.status(500).json({ success: false, message: "No Doctors  found" });
    }
};