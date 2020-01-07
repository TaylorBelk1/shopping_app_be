const db = require('../dbConfig');

module.exports = {
    getAddressByUserId,
    changeAddress
}

// get by username
function getAddressByUserId(id) {
    return db('address')
        .where({user_id: id}).first();
}

// change password
function changeAddress(id, obj) {
    return db('address')
        .where({user_id: id})
        .update(obj)
}