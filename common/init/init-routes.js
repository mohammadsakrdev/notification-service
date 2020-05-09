const config = require('../config/config');
const healthCheck = require('../middleware/healthCheck');
const notFoundHandler = require('../middleware/notFoundHandler');
const errorHandler = require('../middleware/errorHandler');
// Route files
const notificationRoutes = require('../../modules/notification/notification.routes');

/**
 * @function
 * Registers all app routes
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
  // Mount routers
  app.get(`${config.baseUrl}/health`, healthCheck);
  app.use(`${config.baseUrl}/notifications`, notificationRoutes);

  // Handling Not Found
  app.use(notFoundHandler);

  // Central error handler
  app.use(errorHandler);
};
