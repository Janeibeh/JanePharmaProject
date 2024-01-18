import express from "express"
import {addproduct,fetch_product } from '../Controllers/productController.js';



const router = express.Router()

// METHOD POST
router.get("/", fetch_product);
router.get("/:page/:limit", fetch_product);
router.post("/addproduct",addproduct);
router.get("/:category_id", fetch_product);

export default router