import { Router } from "express";
import registerDto from "../dto/register-dto.js";
import registerCon from "./controller.js";
import validate from "../../common/middleware/global-middleware.js";

const authRouter = Router()

authRouter.post("/sign-up", validate(registerDto), registerCon)

export default authRouter