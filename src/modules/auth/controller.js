import ApiResponse from "../../common/utils/api-response.js";
import { register } from "./service.js";

const registerCon = async (req, res) => {
 try {
  const userInfo = await register(req.body);
  throw ApiResponse.created(res, "sign-up successful", userInfo);
 } catch (error) {
   throw ApiResponse.ok(res, "user already exist")
 }
};

export default registerCon;
