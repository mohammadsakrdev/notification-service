/**
 * @function
 * Format notification to be published
 *
 * @param {[Object]} data - Array of notifications
 * @returns {[Object]} - Formatted array
 */
module.exports = (data) => {
  const formatted = [];
  data.forEach((ele) => {
    const { type, title, message, receivers } = ele;
    receivers.forEach((receiver) => {
      formatted.push({
        notificationType: type,
        title,
        message,
        receiver
      });
    });
  });

  return formatted;
};
