import { validationResult } from "express-validator"

export const validateCurrentController = (req)=>{

    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        req.res.status(400).json({error:errors.array()[0]})
        return true
    }
return false

}