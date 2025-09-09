import { asyncHandler } from "../context/asyncHandler.js";

export const askGemini = await asyncHandler(async ({ req, res }) => {

    const {question}  =  req.query
     if(!question){
        return res.status(400).json({message:"please proivde question to answer"})
     }
  const request = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
      process.env.GEMINI_API,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          { parts: [{ text: question }] },
        ],
      }),
    }
  );
  const response = await request.json();
  res.status(200).json({ message: response?.candidates[0]?.content?.parts[0].text });
}, "ask gemini");
