import express from "express";
import authRouter from "./modules/auth/routes.js";
import multer from "multer";
import ApiResponse from "./common/utils/api-response.js";
const app = express();
app.use(express.json());

const upload = multer()

authRouter.post('/upload', upload.single("file"), (req, res)=>{
    console.log(req.file)

    throw ApiResponse.ok(res, "file uploaded")
})
app.use("/auth", authRouter)
export default app;
