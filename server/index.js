import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js";
import userRouter from "./routes/user.route.js"
import  geminiRouter from "./routes/gemini.routes.js"
dotenv.config()


const app = express()



app.use(cors())
app.use(express.json())
app.use("/api/user",userRouter)
app.use("/api/gemini",geminiRouter)
connectDB()

app.listen(4000,()=>{
    console.log("server is connected at port 4000")
})





