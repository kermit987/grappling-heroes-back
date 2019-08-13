const env = process.env.NODE_ENV

const DEVELOPMENT = {
  db: {
    host: process.env.DATABASE_DEV,
    user: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV
  }
}

const PRODUCTION = {
  db: {
    host: process.env.DATABASE_PROD,
    user: process.env.DB_USER_PROD,
    password: process.env.DB_PASSWORD_PROD
  }
}

const TEST = {
  db: {
    host: process.env.DATABASE_TEST,
    user: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST
  }
}

const config = {
  DEVELOPMENT,
  PRODUCTION,
  TEST
}

console.log('value of config[env] ', env)
module.exports = config[env]
