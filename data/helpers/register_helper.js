const db = require('../dbConfig');

module.exports = {
    addCustomer
}

async function addCustomer(data) {
    const { customer, logins, address } = data;

    const id = await db('customers').returning('id').insert(customer);
    logins.customer_id = id[0];
    address.user_id = id[0];
    await db('address').insert(address);
    await db('logins').insert(logins);
    await db('shopping_cart').insert({user_id: id[0]});
    return id[0]
}