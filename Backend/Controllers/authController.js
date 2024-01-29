import UserSchema from "../Models/UserSchema.js"
import PatientSchema from "../Models/PatientSchema.js"
import DoctorSchema from "../Models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator";



const generateToken = user => {
            return jwt.sign( {id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {
                            expiresIn: "1d",
            }) 
        }

export const register = async(req, res) => {
    const {first_name, last_name, password, email, phone, address, photo, role, gender} = req.body

    try {
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false, message:"Invalid email address"})
        }
        if(!validator.isMobilePhone(phone, 'en-NG')){
            return res.status(400).json({success:false, message:"Invalid phone number"})
        }
        if(validator.isEmpty(password)){
            return res.status(400).json({success:false, message:"Password is required"})
        }
        let user = await UserSchema.findOne({ email });
        // Check if user exists
        if (user) {
            return res.status(400).json({success:false, message:"User already exists"})
        }
        else  if (!user) {
                console.log('Account succesfully created')
                res.status(201).json({success:true, message:"Account succesfully created"})
            }
            
        
        // Hash the password before saving to the database
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        let roles = ['user', role]

        user = new UserSchema({
            first_name,
            last_name,
            password: hashPassword,
            email,
            phone,
            address,
            photo,
            roles,
            gender,
        });
        await user.save();
        
        if (role === 'doctor') {
            let doctor = new DoctorSchema({userId: user._id,});
            await doctor.save();
        }else if (role === 'patient') {
            let patient = new PatientSchema({userId: user._id,});   
            await patient.save();
        }
    
    //     // Save the user to the database
        
        res.status(201).json({success:true, message:"Account succesfully created"})

    } 
    catch (error) {
        
        res.status(500).json({success:false, message:"Internal server error, Try again."})
    }

    
    

}




export const login = async(req, res) => {
    try {

        const { email, password } = req.body;
        
        let user = await UserSchema.findOne({ email });
            
        // Check if user doenst exist
            if (!user) {
                return res.status(404).json({success: false, message:"User not found"})
            }

        // then compare passwords
        const passwordMatched = await bcrypt.compare(password, user.password)
        if (!passwordMatched) { 
            return res.status(404).json({ success:false ,message:"Invalid Credentials"})
        }

        //get authentication token 
        const  token = generateToken(user);

        //destructure the properties 
        const {hashedPassword, role, appointments, ...rest} = user._doc

        res.status(200).json({ success:true, message:"Sucessfully logged in", token, user})
        } 

    catch (error) {
        console.log('Error', error)
        // Send a generic error message to clients
            res.status(500).json({ status: "error", message: "Login failed. Please try again." });
        }
}