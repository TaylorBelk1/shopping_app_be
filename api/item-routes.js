const express = require('express');
const router = express.Router();
const items = require('../data/helpers/items-helper');
const messages = require('./constants');

router.get('/', async (req, res) => {
    try {
        const item = await items.getAllItems();
        const categories = await items.getAllItemCategories();
        item ? res.status(200).json({item, categories})
            : res.status(404).json({ message: messages.noItemsFound })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const item = await items.getAllItemsInACategory(id);
        item ? res.status(200).json(item) : res.status(404).json({ message: messages.noCategoriesFound })
    } catch(error) {
        res.status(500).json(error)
    }
})

router.post('/', async(req, res) => {
    const { item } = req.body;
    try {
        const i = await items.addItem(item);
        i ? res.status(200).json({ message: messages.itemSuccessfullyAdded, i })
            : res.status(400).json({ message: messages.cantAddItem })
    } catch(error) {
        res.status(500).json(error)
    }
})

router.put('/:id', async(req, res) => {
    const { id } = req.params;
    const { item } = req.body;
    try {
        const i = await items.updateItem(id, item);
        i != 0 ? res.status(200).json({ message: messages.updatedItem, i})
            : res.status(400).json({ message: messages.cantFindItem });
    } catch(error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const item = await items.deleteItem(id)
        item != 0 ? res.status(200).json({message: messages.itemDeleted, item})
            : res.status(404).json({message: cantFindItem})
    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = router