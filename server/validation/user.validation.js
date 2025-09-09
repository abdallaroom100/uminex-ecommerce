import { body } from "express-validator";
import User from "../models/user.model.js";

export const registerValidation = [
  body("email")
    .isEmail()
    .withMessage("invalid email")
    .custom(async (value) => {
      const user = await User.findByEmail(value);
      if (user) throw new Error("this email is already exist");
      return true;
    }),

  body("fullName.firstName")
    .isLength({ min: 3 })
    .withMessage("first name must be atleast 3 chars"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be atleast 6 chars"),
];

export const loginValidation = [
  body("email")
    .isLength({min:1})
    .withMessage("email is required")
    .custom(async (value, { req }) => {
      const user = await User.findByEmail(value);
      req.user = user;
      if (!user) throw new Error("email not found");
      return true;
    }),

  body("password")
    .isLength({ min: 1 })
    .withMessage("password is required")
    .custom(async (value, { req }) => {
      const user = req.user
      const checkPassword =  await user.comparePassword(value)
      if(!checkPassword) throw new Error("incorrect password")
        return true
    }),
];
