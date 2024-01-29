import express from "express"
import {
    getSingleDoctor,
    getAllDoctors,
    updateDoctor,
    deleteDoctor,
    getDoctorProfile
    } from "../Controllers/doctorController.js"
import {authenticate, restrict} from "../Middlewares/verifyAuthorizationToken.js"
const router = express.Router()

router.get("/:id" , getSingleDoctor)
router.get("/" , getAllDoctors)

// Any endpoint that has restriction/middleware, the role restricted must login to gain access ie Authenticate is a middlewareuser, used to restrict the access to users only with a doctor role)
router.put("/:id", authenticate, restrict(['doctor']),updateDoctor)
router.delete("/:id", authenticate, restrict(['doctor']), deleteDoctor)
router.get("/profile/me", authenticate, restrict(['doctor']), getDoctorProfile)

export default router

