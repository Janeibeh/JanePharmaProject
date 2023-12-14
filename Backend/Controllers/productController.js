import ProductSchema from "../Models/ProductSchema.js"


export const create = async(req, res) => {
    const {title, description, price, image, quantity} = req.body
    // console.log(req.body)
    try {
            product = new ProductSchema({
                title, description, price, image, quantity
            });
    
        // Save the user to the database
        await product.save();
        res.status(200).json({sucess:true, message:"Product succesfully created"})

    } catch (error) {
        res.status(500).json({sucess:false, message:"Internal server error, Try again." + error})
    }
}

