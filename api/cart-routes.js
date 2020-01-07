const express = require('express');
const router = express.Router();
const cart = require('../data/helpers/shopping_cart-helper');
const items = require('../data/helpers/items-helper');
const messages = require('./constants');

// add item to cart
router.post('/', async (req, res) => {
    const { item } = req.body;
    try {
        await cart.addItemToUserCart(item);
        const fullCart = await cart.getCartById(item.cart_id);
        fullCart ? res.status(200).json(fullCart)
            : res.status(400).json({message: messages.cantFindItem})

    } catch (error) {
        res.status(500).json(error)
    }
})

// update items in cart
router.put('/:cartId', async(req, res) => {
    const { item } = req.body;
    const { cartId } = req.params;

    try {
        const updated = await cart.updateItemInUserCart(cartId, item);
        const items = await cart.getCartById(cartId);
        updated > 0 ? res.status(200).json(items)
            : res.status(400).json({ message: messages.cantFindItem })
    } catch (error) {
        res.status(500).json(error)
    }
})

// remove item from cart
router.delete('/:cartId/:prodId', async(req, res) => {
    const { cartId, prodId } = req.params;

    try {
        const deleted = await cart.removeItemFromCart(cartId, prodId);
        deleted > 0 ? res.status(200).json({ message: messages.itemDeleted })
            : res.status(400).json({ message: messages.cantDelete })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router