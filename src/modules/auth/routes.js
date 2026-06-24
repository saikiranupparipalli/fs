import { Router } from "express";
import registerDto from "../dto/register-dto.js";
import  { registerCon,uploadAvatar } from "./controller.js";
import validate from "../../common/middleware/global-middleware.js";
import { upload } from "../../common/middleware/multer.js";

const authRouter = Router()

authRouter.post("/sign-up", validate(registerDto), registerCon)

authRouter.post("/avatar", (req, res, next) => {
  console.log("Avatar route reached");
  next();
}, upload.single("avatar"), uploadAvatar)
export default authRouter