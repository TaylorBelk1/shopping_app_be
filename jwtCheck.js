let jwt = require('express-jwt');
let jwks = require('jwks-rsa');
require('dotenv').config();

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.AUTH0_URI
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: [process.env.AUTH0_ALGORITHIMS]
});

module.exports = jwtCheck