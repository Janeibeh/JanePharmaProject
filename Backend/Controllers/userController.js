import UserSchema from "../Models/UserSchema.js";

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
    } catch (err) {
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
    } catch (err) {
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
    } catch (err) {
        res.status(500).json({ success: false, message: "Not found" });
    }
};


export const getAllUsers = async (req, res) => {
    const id = req.params.id; // Corrected destructuring syntax

    try {
        const users = await UserSchema.find({}).select("-password");

    
        if (!getAllUsers) {
            return res.status(404).json({ success: false, message: "No user found",  data:"users" });
        }

        res.status(200).json({ success: true, message: "User found" });
    } catch (err) {
        res.status(500).json({ success: false, message: "No user found" });
    }
};