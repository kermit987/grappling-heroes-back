const jwt = require('jsonwebtoken')

// postman
// header Authorization from the client but trying to get the client via authorization ('check the upper case') from the code
//value "Bearer " + token (take care of the space between Bearer and token)

const parseToken = (req, res, next) => {
  const header = req.headers['authorization'] //token in store in the header['Authorization']

  if (typeof header !== undefined) {
    const bearer = header.split(' ') //remove 'bearer'
    const token = bearer[1] //get only the token

    req.token = token

    next()
  } else {
    res.sendStatus(403)
  }
}

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
