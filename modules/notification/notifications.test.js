const supertest = require('supertest');
const app = require('../../app');

afterEach(() => app.close());

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 30000)); // avoid jest open handle error
});

https: it('tests the post new movies endpoint and returns as success message', async () => {
  const response = await supertest(app)
    .post('/api/v0/notifications/notify')
    .send({
      notifications: [
        {
          sender: 'sms sender',
          type: 1,
          title: 'sms title',
          message: 'sms message',
          receivers: ['sms receiver']
        },
        {
          sender: 'push sender',
          type: 2,
          title: 'push title',
          message: 'push message',
          receivers: ['push receiver']
        }
      ]
    });

  expect(response.status).toBe(200);
  expect(response.body.status).toBe(true);
  expect(response.body.message).toBe('Done successfully');
  expect(response.body.data).toBe(null);
});
