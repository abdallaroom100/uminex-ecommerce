import { Router } from "express";
import { loginValidation, registerValidation } from "../validation/user.validation.js";
import { assignData, getUserProfile, loginUser, registerUser } from "../controllers/user.controller.js";
import { verifyUser } from "../middleware/verifyAuth.js";
import multer from "multer"

const router = Router()


const storage = multer().any()
router.post("/register",registerValidation,registerUser)
router.post("/login",loginValidation,loginUser)
router.get("/profile",verifyUser,getUserProfile)
router.post("/assign",storage,assignData)
export default router

  