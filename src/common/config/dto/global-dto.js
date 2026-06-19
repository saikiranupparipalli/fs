import Joi from "joi";

class globalDto {
  static schema = Joi.object({});

  static validateUser(data) {
    const { error, value } = this.schema.validate(data, {
      stripUnknown: true,
      abortEarly: false
    });

    if (error) {
      const errors = error.details.map((e) => e.details);
      return { error: errors, value: null };
    }
    return { error: null, value };
  }
}

export default globalDto