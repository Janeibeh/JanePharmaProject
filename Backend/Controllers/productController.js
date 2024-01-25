import mongoose from "mongoose";
import ProductSchema from "../Models/ProductSchema.js"
import CategorySchema from "../Models/CategorySchema.js";


export const addproduct = async(req, res) => {
    const {title, Manufactureer, description, precautions, price, image, quantity, category_id} = req.body
    
    // console.log(req.body) When creating data, you need a lot of input, which is sent in the request body (req.body). 
    try {
        
        let category = await CategorySchema.findById(category_id);
        if(!category) {
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


export const fetch_product = async(req, res) => {
    
    try {
        let products = await ProductSchema.find();
        if (!products) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({sucess:true, message:"Products succesfully fetched", products})
        
    } catch (error) {
        res.status(500).json({sucess:false, message:"Internal server error, Try again." + error})
    }
}

export const fetch_one_product = async(req, res) => {
    const id = req.params.id;
    // console.log('Req', req.params.id) When performing an operation on a specific item (like updating or deleting), you usually identify that item by its id, which is commonly sent as a part of the URL (req.params).

    try {
        let product = await ProductSchema.findById(id).populate('user').exec();
        res.status(200).json({sucess:true, message:"Product succesfully fetched", product})
        
    } catch (error) {
        res.status(500).json({sucess:false, message:"Internal server error, Try again." + error})
    }
}


export const fetch_product_by_category = async(req, res) => {
    console.log('Req', req.params.limit)
    try {
        let products = await ProductSchema.find({categoryId: req.params.category_id}).skip(req.params.page * req.params.limit).limit(req.params.limit);
        res.status(200).json({sucess:true, message:"Product succesfully fetched", products})
        
    } catch (error) {
        res.status(500).json({sucess:false, message:"Internal server error, Try again." + error})
    }
}


export const fetch_products_with_pagination = async(req, res) => {
    console.log('Req', req.params.limit)
    try {
        let products = await ProductSchema.find({categoryId: req.params.category_id}).skip(req.params.page * req.params.limit).limit(req.params.limit);
        res.status(200).json({sucess:true, message:"Product succesfully fetched", products})
        
    } catch (error) {
        res.status(500).json({sucess:false, message:"Internal server error, Try again." + error})
    }
}

