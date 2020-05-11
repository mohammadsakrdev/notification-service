const Joi = require('@hapi/joi');

const notificationsEnum = require('../../../common/enum/notifications');

module.exports = {
  /**
   * Notify api schema
   */
  notifySchema: {
    body: Joi.object()
      .required()
      .keys({
        notifications: Joi.array()
          .items(
            Joi.object().keys({
              sender: Joi.string().required(),
              type: Joi.number()
                .required()
                .valid(...Object.values(notificationsEnum)),
              title: Joi.string().required(),
              message: Joi.string().required(),
              receivers: Joi.array()
                .items(Joi.string().required())
                .min(1)
            })
          )
          .required()
          .min(1)
      })
  }
};
