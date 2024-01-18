import express from "express"
import {createReviews, getAllReviews } from "../Controllers/reviewControllers.js"
import { authenticate, restrict } from "../Authentication/verifyToken.js"

const router = express.Router()


//associate one doctor to his reviews by id using nested routes

router.route("/")
router.get(getAllReviews )
router.post(authenticate, restrict(["patient"]), createReviews)


export default router

