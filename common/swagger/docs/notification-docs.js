module.exports = {
  '/notifications/notify': {
    post: {
      tags: ['Notifications'],
      summary: 'Notify',
      operationId: 'Notify',
      parameters: [],
      requestBody: {
        description: `The notification type:\n * SMS: 1\n * Push notification: 2\n`,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/NotifyRequest'
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
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'Ok',
          headers: {},
          content: {
            'application/json': {
              example: {
                example: {
                  status: true,
                  message: 'Done successfully',
                  data: null
                }
              }
            }
          }
        },
        400: {
          description: 'Bad request'
        },
        500: {
          description: 'Server Error'
        },
        401: {
          description: 'UnAuthorized'
        }
      },
      deprecated: false
    }
  }
};
