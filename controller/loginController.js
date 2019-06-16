const jwt = require('jsonwebtoken')

const privateKey = 'tomato' //put in a env variable

const failure = (req, res) => {
  console.log(req.body)
  res.status(403).send('/failure')
}

const login = (req, res) => {
  console.log('before signing the token')
  jwt.sign(req.user, privateKey, { expiresIn: '1h' }, (err, token) => {
    if (err) {
      console.log('error ', err)
    }
    res.json({
      success: true,
      token: token
    })
  })
}

module.exports = {
  failure,
  login
}
