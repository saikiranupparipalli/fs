import ApiError from "../../common/utils/api-error.js";
import { generateToken } from "../../common/utils/jwt.js";
import User from "./model.js";

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

export { register };
