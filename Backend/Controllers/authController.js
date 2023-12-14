import PatientSchema from "../Models/PatientSchema.js"
import DoctorSchema from "../Models/DoctorSchema.js"
import jsonwebtoken from "jsonwebtoken"
import bcrypt from "bcryptjs"


export const register = async(req, res) => {
    const {first_name, last_name, password, email, phone, address, photo, role, gender} = req.body
    // console.log(req.body)
    try {
        let user = null;
        
        if (role === 'patient') {
            user = await PatientSchema.findOne({ email });
        }else if (role === 'doctor') {
            user = await DoctorSchema.findOne({ email });   
        }
    
            
        // Check if user exists
        if (user) {
                return res.status(400).json({message:"User already exists"})
        }
        // else {
        //     // Handle invalid role
        //     return res.status(400).json({ message: 'Invalid role' });
        // }

        // Hash the password before saving to the database
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // Create a new user based on the role
        if (role === 'patient') {
            user = new PatientSchema({
                first_name,
                last_name,
                password: hashPassword,
                email,
                phone,
                address,
                photo,
                role,
                gender,
            });
        } else if (role === 'doctor') {
            user = new DoctorSchema({
                first_name,
                last_name,
                password: hashPassword,
                email,
                address,
                photo,
                role,
                gender,
            });
        }

        // Save the user to the database
        await user.save();
        res.status(200).json({sucess:true, message:"Account succesfully created"})

    } catch (error) {
        res.status(500).json({sucess:false, message:"Internal server error, Try again." + error})
    }
}

export const login = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}