const { app } = require('../app.js')
const request = require('supertest')

const newFighter = {
  name: 'Jose',
  lastname: 'Aldo',
  birth: '09/09/1986',
  bio:
    'José Aldo da Silva Oliveira Júnior is a Brazilian mixed martial artist who competes in the Ultimate Fighting Championship'
}

describe('/post createFighter', () => {
  test('Check the status code and the message', async () => {
    await request(app)
      .post('/createFighter')
      .set('Accept', 'application/json')
      .send()
      .expect(200)
  })
})
