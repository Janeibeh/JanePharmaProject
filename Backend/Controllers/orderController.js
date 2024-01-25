import mongoose from "mongoose";
import ProductSchema from "../Models/ProductSchema.js"
import CartSchema from "../Models/CartSchema.js";
import CategorySchema from "../Models/CategorySchema.js";
import OrderSchema from "../Models/OrderSchema.js"
import Cart from "../../Frontend/src/Pages/Cart.js";


export const addToCart = async(req, res) => {
    const {product_id, quantity} = req.body
    
    
    // console.log(req.body) When creating or adding data, you need a lot of input, which is sent in the request body (req.body). 
    try {
        
        let product = await ProductSchema.findById(product_id);
        if(!product){
            res.status(400).json({sucess:false, message:"Product not found"})
        }
        let cart = await CartSchema.find({userId})
        let cart = new CartSchema({
            title, description, price, image, quantity, categoryId: category_id
        });

        // Save the user to the database
        await product.save();
        res.status(200).json({sucess:true, message:"Product succesfully added"})
        
    } catch (error) {
        res.status(500).json({sucess:false, message:"Internal server error, Try again." + error})
    }
}

export const removeFromCart = async(req, res) => {
    const {title, Manufactureer, description, precautions, price, image, quantity, category_id} = req.body
    
    // console.log(req.body) When creating data, you need a lot of input, which is sent in the request body (req.body). 
    try {
        try{
            let category = await CategorySchema.findById(category_id);
        } catch (error) {
            res.status(400).json({sucess:false, message:"Invalid category selection"})
        }
        let product = new ProductSchema({
            title, description, price, image, quantity, categoryId: category_id
        });

        // Save the user to the database
        await product.save();
        res.status(200).json({sucess:true, message:"Product succesfully added"})
        
    } catch (error) {
        res.status(500).json({sucess:false, message:"Internal server error, Try again." + error})
    }
}

export const fetchAllCartItems = async(req, res) => {
    const {title, Manufactureer, description, precautions, price, image, quantity, category_id} = req.body
    
    // console.log(req.body) When creating data, you need a lot of input, which is sent in the request body (req.body). 
    try {
        try{
            let category = await CategorySchema.findById(category_id);
        } catch (error) {
            res.status(400).json({sucess:false, message:"Invalid category selection"})
        }
        let product = new ProductSchema({
            title, description, price, image, quantity, categoryId: category_id
        });

        // Save the user to the database
        await product.save();
        res.status(200).json({sucess:true, message:"Product succesfully added"})
        
    } catch (error) {
        res.status(500).json({sucess:false, message:"Internal server error, Try again." + error})
    }
}