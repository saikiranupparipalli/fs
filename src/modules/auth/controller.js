import ApiError from "../../common/utils/api-error.js";
import ApiResponse from "../../common/utils/api-response.js";
import * as authService from "./service.js";

const registerCon = async (req, res) => {
 try {
  const userInfo =   await authService.register(req.body);
  throw ApiResponse.created(res, "sign-up successful", userInfo);
 } catch (error) {
  console.log(error)
   throw ApiResponse.ok(res, "user already exist")
 }
};

const uploadAvatar =async (req, res)=>{
 try {
  const file = req.file
  if(!file) throw ApiError.badReq( "No file uploaded")
    const result = await  authService.avatarUpload(req.user.id, file)
  throw ApiResponse.ok(res, "Avatar uploaded successfully", {avatarUrl: result.url})
  
 } catch (error) {
  console.log(error,"ERROR- avatar not uploaded")
  throw ApiResponse.ok(res,"avatar not uploaded")
 }
}
export  {registerCon, uploadAvatar} ;
