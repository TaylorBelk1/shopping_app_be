const db = require('../dbConfig');

module.exports = {
    getAllItems,
    getAllItemCategories,
    addItem,
    updateItem,
    deleteItem,
    getAllItemsInACategory,
    getItemById
}

async function getAllItems() {
    const items = await db('item')
        .join('images', 'images.item_id', 'item.id')
    return items
}

function getAllItemCategories() {
    return db('categories')
}

function getAllItemsInACategory(id) {
    return db('item')
        .where({ category_id: id })
}

function getItemById(id) {
    return db('item').where({id: id})
}

function addItem(obj) {
    return db('item').insert(obj);
}

async function updateItem(id, obj) {
    const itemId = await db('item')
        .where({id: id})
        .update(obj)

        if(itemId > 0) {
            return await getItemById(id);
        } else {
            return itemId
        }
}

function deleteItem(id) {
    return db('item')
        .where({id: id})
        .delete();
}