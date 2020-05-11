const mongoose = require('mongoose');

const notificationsEnum = require('../../common/enum/notifications');

const { Schema } = mongoose;

const NotificationSchema = new Schema(
  {
    sender: { type: String },
    receivers: [{ type: String }],
    type: {
      type: Number,
      enum: Object.values(notificationsEnum)
    },
    title: {
      type: String
    },
    message: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Notification = mongoose.model('Notification', NotificationSchema);
module.exports = Notification;
