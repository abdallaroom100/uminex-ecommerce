import User from "../models/user.model.js"

export const createUser = async (fullName,email,password)=>{
    return  await User.create({
        fullName,email,password
     })
}

