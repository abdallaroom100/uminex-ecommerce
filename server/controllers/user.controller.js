import { asyncHandler } from "../context/asyncHandler.js";
import fs from "fs"
import { fileURLToPath } from "url";

import User from "../models/user.model.js";
import path from "path";
import { checkUploadsFileExists } from "../helper/checkUploadFileExists.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const registerUser = await asyncHandler(
  async ({ req, res }) => {
    const { fullName, email, password } = req.body;

    const hash = await User.hashPassword(password);
    const newUser = await User.create({ fullName, email, password: hash });

    res.status(200).json(newUser);
  },
  "register user",
  { validate: true }
);

export const loginUser = await asyncHandler(
  ({ req, res }) => {
    const user = req.user;

    const token = user.generateAuthToken();
    res
      .status(200)
      .json({ user: { ...user._doc, password: undefined }, token });
  },
  "loginUser",
  { validate: true }
);

export const getUserProfile = await asyncHandler(async ({ req, res }) => {
  res.status(200).json({ ...req.user._doc, password: undefined });
}, "getUserProfile");












export const assignData = async (req,res)=>{
 try {

  checkUploadsFileExists()
//   console.log(__dirname)
//  if(req.files && req.files[0]){
//    const uploadPath = path.join(__dirname,"../uploads")
//    console.log(uploadPath)
//    const currentPath = path.join(__dirname,"../uploads",req.files[0].originalname)

//    if(!fs.existsSync(uploadPath)){
//     fs.mkdirSync(uploadPath,{recursive:true})
//    }
//    fs.writeFileSync(currentPath,req.files[0].buffer)
   
//  }

//   return res.status(400).json({message:"assign data test successfully"})
 } catch (error) {
  console.log(error.message)
  console.log("error in  assign datga controller")
 }
}