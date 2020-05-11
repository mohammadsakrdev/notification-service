const { OK } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const Notification = require('../notification.schema');
const publisher = require('../../pubSub/publisher.js');
const formatNotifications = require('../services/formatNotifications');
const config = require('../../../common/config/config');

// @desc      Notify customers with push/SMS notifications
// @route     POST /api/v0/notifications/notify
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { notifications } = req.body;

  res.status(OK).json({
    status: true,
    message: 'Done successfully',
    data: null
  });

  Notification.insertMany(notifications)
    .then((data) => {
      const formatted = formatNotifications(data);
      publisher(config.events.notifications, JSON.stringify(formatted));
    })
    .catch((err) => console.log(err.message));
});
