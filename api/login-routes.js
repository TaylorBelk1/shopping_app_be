const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const customers = require('../data/helpers/customer_helper');
const logins = require('../data/helpers/logins-helper');
const addresses = require('../data/helpers/address-helper');
const cart = require('../data/helpers/shopping_cart-helper');
const messages = require('./constants');
const getToken = require('../auth/token').generateToken;

router.post('/', async(req, res) => {
    const { username, password } = req.body;
    try {
        // get user info from db if exists
        const user = await logins.getUserByUsername(username);
        // if user exists compare the passwords
        if(user && bcrypt.compareSync(password, user.password)) {
            // if password matches, generate a token and get users data
            const token = await getToken(user.customer_id);
            const customer = await customers.getCustomerById(user.customer_id);
            const address = await addresses.getAddressByUserId(user.customer_id);
            const cartId = await cart.getCartId(user.customer_id);
            const shoppingCart = await cart.getUserCart(user.customer_id);
            res.status(200).json({
                message: `${username} was logged in successfully.`,
                customer,
                address,
                username,
                cartId,
                shoppingCart,
                token
            })

        } else res.status(401).json({ error: 'Not Authorized' })

    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router;