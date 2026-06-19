class ApiResponse {
  static created(res, message, data = null) {
    return res.status(200).json({
      message: message,
      data: data,
    });
  }
  static ok(res, message, data) {
    return res.status(201).json({
      message,
      data,
    });
  }
}
export default ApiResponse;
