module.exports = {
  NotifyRequest: {
    title: 'NotifyRequest',
    required: ['notifications'],
    type: 'object',
    properties: {
      notifications: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Notification'
        },
        description: ''
      }
    },
    example: {
      notifications: [
        {
          sender: 'sms tester',
          type: 1,
          title: 'sms title',
          message: 'sms message',
          receivers: ['sms receiver']
        },
        {
          sender: 'push tester',
          type: 2,
          title: 'push title',
          message: 'push message',
          receivers: ['push receiver']
        }
      ]
    }
  },
  Notification: {
    title: 'Notification',
    required: ['sender', 'type', 'title', 'message', 'receivers'],
    type: 'object',
    properties: {
      sender: {
        type: 'string'
      },
      type: {
        type: 'integer',
        format: 'int32'
      },
      title: {
        type: 'string'
      },
      message: {
        type: 'string'
      },
      receivers: {
        type: 'array',
        items: {
          type: 'string'
        },
        description: ''
      }
    },
    example: {
      sender: 'sms tester',
      type: 1,
      title: 'sms title',
      message: 'sms message',
      receivers: ['sms receiver']
    }
  }
};
