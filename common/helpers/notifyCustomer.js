const notificationAdapter = require('../utils/notificationAdapter');

/**
 * @function
 * Send notification to customer according to its type
 *
 * @param {object} data
 * @param {string} data.notificationType - The notification type.
 * @param {string} data.title - The notification title.
 * @param {string} data.message - The notification message.
 * @param {string} data.receiver - The notification receiver.
 */
module.exports = ({ notificationType, title, message, receiver }) => {
  notificationAdapter.notify({ notificationType, title, message, receiver });
};
