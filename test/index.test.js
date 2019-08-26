const { app } = require('../app.js')
const config = require('./jest.config.js')
const { db, closeDatabase } = require('model/db')
const request = require('supertest')
const _ = require('lodash')

const newFighter = {
  name: 'Jose',
  lastname: 'Aldo',
  birth: '09/09/1986',
  biography: 'José Aldo is brazilian'
}

const fighters = [
  {
    name: 'Craig',
    lastname: 'Jones',
    birth: '09/09/1986',
    biography: 'Craig Jones is Australian'
  },
  {
    name: 'Gordon',
    lastname: 'Ryan',
    birth: '08/07/1995',
    biography: 'Gordon Ryan is American'
  },
  {
    name: 'Joao',
    lastname: 'Myiao',
    birth: '11/05/1991',
    biography: 'Joao Myiao is Brazilian'
  },
  {
    name: 'Pablo',
    lastname: 'Myiao',
    birth: '11/05/1991',
    biography: 'Pablo Myiao is Brazilian'
  }
]

const seed = fighters => {
  return new Promise((resolve, reject) => {
    try {
      Promise.all(
        fighters.map(fighter =>
          request(app)
            .post('/createFighter')
            .set('Accept', 'application/json')
            .send(fighter)
        )
      ).then(resolve)
    } catch {
      reject()
    }
  })
}

beforeAll(async done => {
  try {
    await db.dropDatabase()
    console.log('database drop')
    await seed(fighters)
    console.log('database seed')
    done()
  } catch {
    console.log('drop database failed in index.test.js')
  }
})

describe('/GET getFighter', () => {
  test('Get all of the fighter', async () => {
    return await request(app)
      .get('/getFighter')
      .send()
      .expect(200)
      .then(response => {
        const result = JSON.parse(response.text).map(fighter => {
          delete fighter['_id']
          return fighter
        })
        // console.log('result ', _.sortBy(result, ['name', 'lastname']))
        // console.log('==================')
        // console.log('fighters ', _.sortBy(fighters, ['name', 'lastname']))
        expect(
          _.isEqual(
            _.sortBy(result, ['name', 'lastname']),
            _.sortBy(fighters, ['name', 'lastname'])
          )
        ).toBeTruthy()
      })
  })
})

describe('/POST createFighter', () => {
  test('Creating a new fighter with valid data', async done => {
    await request(app)
      .post('/createFighter')
      .set('Accept', 'application/json')
      .send(newFighter)
      .expect(200)
    done()
  })
})

describe('/GET getFighterByName', () => {
  test('Get fighter by name with valid name', async done => {
    await request(app)
      .post('/getFighterByName')
      .set('Accept', 'application/json')
      .send(newFighter.name)
      .expect(200)
    done()
  })
})

//
//
//
// Authentication
//
//
//

const authentication = {
  username: 'steven',
  password: 'epitech'
}

const invalidData = {
  username: 'invalid',
  password: 'invalid'
}

let validToken = ''

describe('/POST tyring authentication', () => {
  test('Authentication using valid details', async done => {
    await request(app)
      .post('/login')
      .set('Accept', 'application/json')
      .send(authentication)
      .expect(200)
      .then(response => {
        validToken = JSON.parse(response.text).token
      })
    done()
  })
})

describe('/POST tyring authentication', () => {
  test('Authentication using invalid details', async done => {
    await request(app)
      .post('/login')
      .set('Accept', 'application/json')
      .send(invalidData)
      .expect(302)
    done()
  })
})

//
//
//
// Check authorization
//
//
//

const invalidToken = 'invalidToken'

describe('/GET Checking the token', () => {
  test('Check token with valid token', async done => {
    await request(app)
      .get('/verifyToken')
      .set('authorization', validToken)
      .send()
      .expect(200)
    done()
  })
})

describe('/GET Checking the token', () => {
  test('Check token with invalid token', async done => {
    await request(app)
      .get('/verifyToken')
      .set('authorization', invalidToken)
      .send()
      .expect(403)
    done()
    // .expect(200)
  })
})

afterAll(done => {
  closeDatabase(done)
})
