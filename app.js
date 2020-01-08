const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json(), cors());
app.options('*', cors());

const customerRoutes = require('./api/customer-routes');
const createCustomerRoute = require('./api/create-customer-routes');
const loginRoute = require('./api/login-routes');
const itemsRoute = require('./api/item-routes');
const cartRoute = require('./api/cart-routes');
const auth = require('./auth/authenticate');

//entry point
app.get('/', (req, res) => {
    res.status(200).json('Application is running...')
})

app.use('/api', auth.authenticateUser);
app.use('/register', createCustomerRoute);
app.use('/login', loginRoute);
app.use('/items', itemsRoute);
app.use('/api/customers', customerRoutes);
app.use('/api/cart', cartRoute);

module.exports = app;
