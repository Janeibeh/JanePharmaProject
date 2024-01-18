import jwt from "jsonwebtoken"
import DoctorSchema from "../Models/DoctorSchema.js"
import PatientSchema from "../Models/PatientSchema.js"
import UserSchema from "../Models/UserSchema.js"

export const authenticate = async( res, req, next) => {
    // Get token from headers
    const authToken = req.headers.authorization

    //Check token exists
    if(!authToken || !authToken.startsWith("bearer")) 
        {
            res.status(401).json({success:"false", message: "No token, Authentication denied" })
        } 

        try {
            // Assuming authToken is extracted from the request headers
            // const authToken = req.headers.authorization;
        
            // Extract token
            const token = authToken.split(" ")[1];
        
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.userId = decoded.id;
            req.role = decoded.role;
        
            // Next function must be called for this authentication implementation to work
            next();
        } catch (error) {
            // Handle the error
            if (err.name = "TokenExpired"){
                res.status(401).json({ message: "Token is expired" });
            }
            else{
                res.status(401).json({success:"false", message: "Authentication failed, Invalid token" });
            } 
        }
}




export const restrict = (...roles) => { return async (req, res, next) => 
    {
        let user;

        // Assuming your user roles are determined here
        const patient = await PatientSchema.findById(req.userId);
        const doctor = await DoctorSchema.findById(req.userId);

        if (patient) {
            user = patient;
        } else if (doctor) {
            user = doctor;
        } else {
            return res.status(401).json({ success: "false", message: "User not found" });
        }

        if (!roles.includes(user.role)) {
            return res.status(401).json({ success: "false", message: "You are not authorized" });
        }

        next();
    };
};