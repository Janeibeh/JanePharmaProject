import mongoose from "mongoose";
import ProductSchema from "../Models/ProductSchema.js"
import CategorySchema from "../Models/CategorySchema.js";


export const addproduct = async(req, res) => {
    const {title, Manufactureer, description, precautions, price, image, quantity, category_id} = req.body
    // console.log(req.body)
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


export const fetch_product = async(req, res) => {
    console.log('Req', req.params.limit)
    try {
        let products = await ProductSchema.find().skip(req.params.page * req.params.limit).limit(req.params.limit);
        res.status(200).json({sucess:true, message:"Product succesfully fetched", products})
        
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
