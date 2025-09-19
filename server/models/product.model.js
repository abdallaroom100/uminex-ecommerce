import mongoose from "mongoose";


const RealNumbervalidation =  ()=>{
    return v=>Array.isArray(v) && v.length > 0
}
const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  starts: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 }, 
  mainDetails: { 
    type: [String], 
    required: true, 
    validate: RealNumbervalidation()
  },
  quantity: { type: Number, required: true, min: 0 },
  contact: { 
    type: String, 
    required: true, 
  },
  shippingStatus: { type: Boolean, required: true },
  refundsDays: { type: Number, required: true, min: 0 },
  vendor: { type: String, required: true, trim: true },
  keywords: [String], 
  categories: { 
    type: [String], 
    required: true, 
    validate: RealNumbervalidation()
  },
  tags: { 
    type: [String], 
    required: true, 
    validate: RealNumbervalidation()
  },
  descriptionCode: { type: String, required: true },
  mainImage: { type: String, required: true },
  images: { 
    type: [String], 
    required: true,
    validate: RealNumbervalidation()
  }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;
