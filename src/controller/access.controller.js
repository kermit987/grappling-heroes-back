const jwt = require('jsonwebtoken');

const privateKey = 'tomato'; //put in a env variable

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
      console.log('verifyToken fail');
      res.sendStatus(403);
    } else {
      console.log('Inside the else of the verify token');
      res.json({
        message: 'Token valid',
        authorizeData //Content user Credential
      });
    }
  });
};

module.exports = { verifyToken };
