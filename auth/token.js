const jwt = require('jsonwebtoken');
const jwtKey = require('./secret').jwtSecret;

module.exports = {
    generateToken
}

async function generateToken(id) {
    try {
        const token = await jwt.sign(id, jwtKey);
        return token
    } catch (error) {
        console.log(error)
    }
}