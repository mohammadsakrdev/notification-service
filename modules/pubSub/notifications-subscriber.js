const Redis = require('ioredis');
const subscriber = new Redis();

const config = require('../../common/config/config');

const {
  sendNotificationMessage
} = require('../../common/utils/notificationQue');

subscriber.on('message', (channel, data) => {
  const list = JSON.parse(data);
  list.forEach((item) => sendNotificationMessage(JSON.stringify(item)));
});

/**
 * @function
 * Subscribe to notifications event
 *
 */
module.exports = () => {
  subscriber.subscribe(config.events.notifications);
};
