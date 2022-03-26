const serverError = (err, req, res, next) => {
  if (res.status) {
    res.status(err.status).json({ status: err.status, message: err.message });
  } else {
    res.status(500).json({ status: 500, message: err.message });
  }
};

module.exports = {
  serverError,

};
