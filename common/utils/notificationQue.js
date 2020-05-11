const RedisSMQ = require('rsmq');

const config = require('../config/config');

const rsmq = new RedisSMQ({
  host: config.redis.host,
  port: config.redis.port,
  ns: config.redis.rqmsNamespace
});
module.exports = {
  createQueue: async () => {
    try {
      response = await rsmq.createQueueAsync({
        qname: config.redis.notificationQueue
      });
      if (response === 1) {
        console.log('Queue created', response);
      }
    } catch (err) {
      if (err.name == 'queueExists') console.log(' DQueue Exists');
      else 'redis error';
    }
  },
  sendNotificationMessage: async (data) => {
    try {
      response = await rsmq.sendMessageAsync({
        qname: config.redis.notificationQueue,
        message: data
      });
      if (response) {
        console.log('Message sent. ID:', response);
      }
    } catch (err) {
      console.log(err);
    }
  }
};
