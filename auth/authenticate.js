const jwt = require('jsonwebtoken');
const jwtKey = require('./secret').jwtSecret;
const messages = require('../api/constants');

module.exports = {
    authenticateUser
}

function authenticateUser(req, res, next) {
    // get token from Authorization field on header
    const token = req.get('Authorization');

    if(token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            if(err) {
                return res.status(401).json(err);
            } else {
                req.decoded = decoded;
            }
            next();
        });
    } else {
        return res.status(401).json({
            error: messages.noToken
        });
    }
}