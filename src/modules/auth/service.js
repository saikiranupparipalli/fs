import imagekit from "../../common/config/imagekit.js";
import ApiError from "../../common/utils/api-error.js";
import { generateToken } from "../../common/utils/jwt.js";
import User from "./model.js";
import fs from "node:fs";
import path from "path";
const register = async ({ name, email, password }) => {
  const user = await User.findOne({ email });

  // if (user) throw ApiError.conflict("user already exists");
  //  console.log(user)
  const { rawToken, hashedToken } = generateToken();
  // console.log(rawToken);
  //    const hasedtoken = await user.save(hashedToken)

  const createUser = await User.create({
    name,
    email,
    password,
    verificationToken: hashedToken,
  });

  return { name, email, rawToken };
};

const avatarUpload = async (userId, file) => {
   
  try {
    const fileStream = fs.createReadStream(file.path);
    const uploadResImgKit = await imagekit.files.upload({
      file: fileStream,
      fileName: file.fileName,
      folder: "/user-avatar",
    });
   
    await User.findByIdAndUpdate(
      userId,
      { avatar: uploadResImgKit.url },
      { new: true },
    );

    
    return {url: uploadResImgKit.url, fileId: uploadResImgKit.fileId}
  } catch (error) {
   try {
     if(file.path && fs.existsSync(file.path)){
       fs.unlinkSync(file.path)
    }
   } catch (error) {
    console.log("DELETE-FAILED IN DISK", error)
   }
   throw error
  }
  
};

export { register, avatarUpload };
