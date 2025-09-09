import { validateCurrentController } from "../helper/validate.js";

export const asyncHandler = async (
  controller,
  controllerName,
  validation = false
) => {
  return (req, res) => {
    try {
      if (validation?.validate && validateCurrentController(req)) return;

      return controller({ req, res });
    } catch (error) {
      console.log(error);
      console.log("error in " + controllerName + " controller");
    }
  };
};
