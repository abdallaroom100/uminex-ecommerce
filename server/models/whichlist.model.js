import mongoose from "mongoose";

const whichlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);


const Whichlist = mongoose.model("Cart",whichlistSchema)

export default Whichlist