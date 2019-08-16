const jwt = require('jsonwebtoken');

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
  const header = req.headers['authorization'];

  if (typeof header !== undefined) {
    const bearer = header.split(' ');
    const token = bearer[0]; //modify to 0  instead of 1

    // console.log('value of bearer ', bearer);

    req.token = token;

    // console.log('Value of req.token ', req.token);
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = {
  parseToken
};
