import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema(
  {
    fullName: {
      firstName: {
        type: String,
        required: true,
        minlength: [3, " first name must be atleast 3 chars"],
      },
      lastName: {
        type: String,

        minlength: [3, " first name must be atleast 3 chars"],
      },
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
      // select: false,
    },
    socketId: String

  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword =  async function  (password) {
  console.log(password,this.password)
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function(){
 return jwt.sign({id:this._id},process.env.JWT_SECRET)
}

userSchema.statics.hashPassword = async function(password){
   return await bcrypt.hash(password,10)
}

userSchema.statics.findByEmail = async function(email){
   return await this.findOne({email}).select("+password")
}
const User = await  mongoose.model("user",userSchema)

 export default User
