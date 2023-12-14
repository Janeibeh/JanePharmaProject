import CategorySchema from "../Models/CategorySchema.js"


export const create = async(req, res) => {
    const {name} = req.body
    // console.log(req.body)
    try {
            category = new CategorySchema({
                name
            });
    
        // Save the user to the database
        await category.save();
        res.status(200).json({sucess:true, message:"Category succesfully created"})

    } catch (error) {
        res.status(500).json({sucess:false, message:"Internal server error, Try again." + error})
    }
}

