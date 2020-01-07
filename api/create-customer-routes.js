const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const customers = require('../data/helpers/register_helper');
const messages = require('./constants');
const getToken = require('../auth/token').generateToken;

router.post('/new-customer', async (req, res) => {
    const { user } = req.body;

    if(!user) {
        res.status(400).json({ message: messages.badRequest })
    } else {
        let hash = bcrypt.hashSync(user.logins.password, 10);
        user.logins.password = hash;

        try {
            const id = await customers.addCustomer(user)
            const token = await getToken(id);
            res.status(201).json({
                message: 'User was successfully created',
                token
            });

        } catch (error) {
            res.status(500).json({error, message: 'Failed to generate a token or add user'})
        }
    }
})

module.exports = router;