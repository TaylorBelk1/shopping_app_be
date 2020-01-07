const db = require('../dbConfig');

module.exports = {
    getAllCustomers,
    getCustomerById,
    getCustomerByEmail,
    addNewCustomer,
    updateExistingCustomerInfo,
    deleteExistingCustomer
}

// get all
function getAllCustomers() {
    return db('customers')
}

// get by id
function getCustomerById(int) {
    return db('customers')
        .where({id: int}).first()
}

// get by email
function getCustomerByEmail(str) {
    return db('customers')
        .where(email, str)
}

// add user
function addNewCustomer(obj) {
    return db('customers').returning('id').insert(obj)
}

// edit user
function updateExistingCustomerInfo(int, obj) {
    return db('customers')
        .returning([
            id,
            first_name,
            last_name,
            email,
            phone_number
        ])
        .where(id, int)
        .update(obj)
}

// delete user
function deleteExistingCustomer(int) {
    return db('customers')
        .returning(id)
        .where(id, int)
        .delete()
}
