const RSMQWorker = require('rsmq-worker');

const config = require('../config/config');
const notifyCustomer = require('../helpers/notifyCustomer');

const worker = new RSMQWorker('notificationQueue', {
  host: config.redis.host,
  port: config.redis.port,
  ns: config.redis.rqmsNamespace
});

worker.on('message', function(data, next, id) {
  const message = JSON.parse(data);
  notifyCustomer(message);
  next();
});

// optional error listeners
worker.on('error', function(err, message) {
  console.log('ERROR', err, message.id);
});
worker.on('exceeded', function(message) {
  console.log('EXCEEDED', message.id);
});
worker.on('timeout', function(message) {
  console.log('TIMEOUT', message.id, message.rc);
});

module.exports = worker;
