const globalErrorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.code) {
    return res.status(err.code).json(err);
  }

  if (!err.code) {
    return res.status(500).json({
      code: 500,
      type: "ServerErrror",
      name: "ServerErrrorEception",
      message: err.message,
    });
  }

  next();
};
export default globalErrorHandler;