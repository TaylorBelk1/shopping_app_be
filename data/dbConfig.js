const knex = require('knex');
const enviornment = process.env.ENVIRONMENT || 'development';
const config = require('../knexfile.js')[enviornment];
module.exports = knex(config);