const Redis = require('ioredis');
const publisher = new Redis();

/**
 * @function
 * Publish an event with data
 *
 * @param {String} eventName - The event name to be emitted.
 * @param {String} data - The data to be published.
 */
module.exports = (eventName, data) => {
  publisher.publish(eventName, data);
};
