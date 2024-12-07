const addToCartModel = require("../../models/cartProduct")

const UpdateAddToCartProduct = async(req,res)=>{
    try {

        const currentUserId = req.UserId
        const addToCartProductId = req?.body?._id
        const qty = req.body.quantity

        const updateProduct = await  addToCartModel.updateOne({_id : addToCartProductId },{
            ...(qty && {quantity : qty})
        })

        res.json({
            message : "Product Updated",
            data : updateProduct,
            error : false,
            succcess: true
        })


    } catch (err) {
            res.json({
                message : err?.message || err,
                error: true,
                success : false
            
            })
    }
}

module.exports = UpdateAddToCartProduct