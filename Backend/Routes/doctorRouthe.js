import express from "express"
import {getSingleDoctor, getAllDoctors, updateDoctor, deleteDoctor} from "../Controllers/doctorController.js"
import {authenticate, restrict} from "../Authentication/verifyToken.js"
const router = express.Router()

router.get("/:id" , getSingleDoctor)
router.get("/" , getAllDoctors)
router.put("/:id", authenticate, restrict(['doctor']),updateDoctor)
router.delete("/:id", authenticate, restrict(['doctor']), deleteDoctor)

export default router

