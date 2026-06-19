import globalDto from "../../common/config/dto/global-dto.js";
import Joi from "joi";
class registerDto extends globalDto {
  static schema = Joi.object({
    name: Joi.string().min(3).max(15),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(20).required()
  });
}

export default registerDto;
