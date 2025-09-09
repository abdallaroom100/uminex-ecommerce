import { Router } from "express";
import { askGemini } from "../controllers/gemini.controller.js";


const router = Router()

router.get("/ask",askGemini)

export default router