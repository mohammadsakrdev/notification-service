const { OK } = require('http-status-codes');

// @desc Notification module health check
module.exports = (req, res, next) => {
  return res.status(OK).json({
    success: true,
    message: 'Notification module is up & running.',
    data: null
  });
};
