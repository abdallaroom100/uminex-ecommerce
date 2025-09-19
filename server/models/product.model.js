import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:String,
    starts:Number,
    price:String,
    mainDetails:[String],
    quantity:Number,
    contact:String,
    shippingStatus:Boolean,
    refundsDays:Number,
    vendor:String,
    categories:[String],
    tags:[String],
    descriptionCode:String,
    mainImage:String,
    images:[String]
})


const Product = mongoose.model("Product",productSchema)

export default Product
