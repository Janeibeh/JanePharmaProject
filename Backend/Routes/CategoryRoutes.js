import express from "express"
import {create } from '../Controllers/CategoryController.js';

const router = express.Router()

// METHOD POST
router.post("/create", create);


export default router