/* eslint-disable func-names */
/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');

const config = require('../../common/config/config');

const { Schema } = mongoose;

const NotificationSchema = new Schema(
  {},
  {
    timestamps: true
  }
);

const Notification = mongoose.model('Notification', NotificationSchema);
module.exports = Notification;
