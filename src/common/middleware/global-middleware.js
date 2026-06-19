import globalDto from "../config/dto/global-dto.js";

function validate(data) {
  return (req, res, next) => {
    const { error, value } = data.validateUser(req.body);

    if (error) {
      throw ApiError.conflict("pass correct details");
    }

    req.body = value;
    next();
  };
}

export default validate
