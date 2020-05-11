const Redis = require('ioredis');

const config = require('../../common/config/config');

const publisher = new Redis({ host: 'redis' });

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
