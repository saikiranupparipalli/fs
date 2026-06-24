class ApiError extends Error {
  constructor( message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }

  static conflict(message = "conflict") {
    return new ApiError(401, message) 
  }
  static badReq(message = "badRequest") {
    return new ApiError(400, message) 
  }
  static unauthorized(message = "unauthorized") {
    return  new ApiError(402, message);
  }
  static notfound(message = "notfound") {
    return  new ApiError(400, message);
  }
}

export default ApiError