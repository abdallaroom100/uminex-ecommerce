import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const verifyUser = async (req, _, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) 
      return req.res.status(400).json({ error: "unauthorized" });
    


    
    const decode =  jwt.verify(token, process.env.JWT_SECRET);
 
    if (!decode?.id)
      return req.res.status(400).json({ error: "invalid or expired token" });

    const user = await User.findById(decode.id);
    req.user = user;
    next();
  } catch (error) {
    req.res.status(400).json({error:"unauthorized"})
  }
};
