import express from "express"
import {
    updateUser,
    deleteUser, 
    getSingleUser,
    getAllUsers,
    getUserProfile,
    getMyAppointments
                } from "../Controllers/userController.js"
import { authenticate, restrict } from "../Authentication/verifyToken.js"

const router = express.Router()
// Any endpoint that has restriction/middleware, the role restricted must login to gain access ie Authenticate is a middlewareuser, used to restrict the access 
// Ensure to test each route on postman, If restricted ,  login in on postman
router.get("/:id" , authenticate, restrict(['patient']),  getSingleUser)
router.get("/" ,authenticate, /*restrict(['admin']),*/ getAllUsers)
router.put("/:id" , authenticate, restrict(['patient']),  updateUser)
router.delete("/:id" ,authenticate, restrict(['patient']),   deleteUser)
router.get("/profile/user/me" ,authenticate, restrict(['patient']),   getUserProfile)
router.get("/appointments/my-appointments" ,authenticate, restrict(['patient']), getMyAppointments)

export default router

