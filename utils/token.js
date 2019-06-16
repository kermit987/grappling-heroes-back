const jwt = require('jsonwebtoken')

/**
 * Postman
 * Header Authorization from the client but trying to get the client via authorization ('check the upper case') from the code
 * value "Bearer " + token (take care of the space between Bearer and token)
 *
 * bearer = header.split(' ') // remove the bearer
 * const token = bearer[1] // get only the token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const parseToken = (req, res, next) => {
  const header = req.headers['authorization']

  if (typeof header !== undefined) {
    const bearer = header.split(' ')
    const token = bearer[1]

    req.token = token

    next()
  } else {
    res.sendStatus(403)
  }
}
/**
 * res.json({
 *    authorizeData // Content user credential (username)
 * })
 *
 * since the token is made base on the username
 *
 * @param {*} req
 * @param {*} res
 */

const verifyToken = (req, res) => {
  jwt.verify(req.token, privateKey, (err, authorizeData) => {
    if (err) {
      console.log('verifyToken fail')
      res.sendStatus(403)
    } else {
      console.log('Inside the else of the verify token')
      res.json({
        message: 'Token valid',
        authorizeData //Content user Credential
      })
    }
  })
}

module.exports = {
  parseToken,
  verifyToken
}
