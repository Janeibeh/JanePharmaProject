import express from "express"
import { addproduct, fetch_product, fetch_one_product,  fetch_products_with_pagination } from '../Controllers/productController.js';



const router = express.Router()

// Add a new product
router.post("/product/addproduct", addproduct);

// Get a single product by ID
router.get("/product/:id", fetch_one_product);


// Get products by category ID
// router.get("/:category_id", fetch_product_by_category);


// Get all products , fetch_product is a function in controllers, this uses the / home product route and doesnt need the function mention on the postman route
router.get("/", fetch_product);


// Get products with pagination
router.get("/products/:page/:limit", fetch_products_with_pagination);





export default router;
