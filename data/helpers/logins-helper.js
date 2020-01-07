const db = require('../dbConfig');

module.exports = {
    getUserByUsername,
    changePassword
}

// get by username
async function getUserByUsername(str) {
    return await db('logins')
        .returning('customer_id')
        .where({username: str}).first();
}

// change password
function changePassword(id, obj) {
    return db('logins')
        .where(customer_id, id)
        .update(obj)
}