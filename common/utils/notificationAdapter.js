const notifications = require('../../common/enum/notifications');

class NewNotification {
  constructor() {
    this.sendSMS = function(message, receiver) {
      console.log(`SMS notification: Message ${message}, sent to ${receiver}`);
    };
    this.sendPushNotification = function sendPushNotification(
      title,
      message,
      receiver
    ) {
      console.log(
        `Push notification: Title ${title}, Message ${message}, pushed to ${receiver}`
      );
    };
  }
}

class NotificationAdapter {
  constructor() {
    const newNotification = new NewNotification();

    this.notify = function({ notificationType, title, message, receiver }) {
      switch (notificationType) {
        case notifications.SMS:
          newNotification.sendSMS(message, receiver);
          break;
        case notifications.PUSH:
          newNotification.sendPushNotification(title, message, receiver);
          break;
        default:
      }
    };
  }
}

module.exports = new NotificationAdapter();
