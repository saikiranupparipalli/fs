import express from "express";
import authRouter from "./modules/auth/routes.js";
import multer from "multer";
import ApiResponse from "./common/utils/api-response.js";
import path from "path";

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

authRouter.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);

  throw ApiResponse.ok(res, "file uploaded");
});

app.use("/auth", authRouter);
export default app;
// O/P OF STORING INSIDE MEMORY
// {
//   fieldname: 'file',
//   originalname: 'Screenshot (477).png',
//   encoding: '7bit',
//   mimetype: 'image/png',
//   buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 07 80 00 00 04 38 08 06 00 00 00 e8 d3 c1 43 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 00 04 ... 207805 more bytes>,
//   size: 207855
// }

// O/P OF STORING INSIDE DISK
// {
//   fieldname: 'file',
//   originalname: 'Screenshot (470).png',
//   encoding: '7bit',
//   mimetype: 'image/png',
//   path: 'public\\uploads\\file-1781964884091-962866641',
//   destination: 'public/uploads',
//   filename: 'file-1781964884091-962866641',
//   size: 503667
// }
