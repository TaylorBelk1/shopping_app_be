const express = require('express');
const router = express.Router();
const customers = require('../data/helpers/customer_helper');
const messages = require('./constants');

const checkAndRespond = (res, customer, message) => {
    customer ?
    res.status(200).json(customer)
    : res.status(404).json({
        message: message
    })
}

router.get('/', async (req, res) => {
    try{
        const customer = await customers.getAllCustomers();
        checkAndRespond(res, customer, messages.cantFind);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/id/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await customers.getCustomerById(id);
        checkAndRespond(res, customer, messages.cantFindId);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/email/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const customer = await customers.getCustomerByEmail(email);
        checkAndRespond(res, customer, messages.cantFindEmail);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/update-customer-info', async (req, res) => {
    const user = req.body;
    try {
        const customer = await customers.updateExistingCustomerInfo(user);
        checkAndRespond(res, customer, messages.tryAgainLater)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/delete-customer/:id', async (req, res) => {
    const id = req.params;
    try {
        const customer = await customers.deleteExistingCustomer(id);
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;