const db = require('../dbConfig');

module.exports = {
    getAllItems,
    addItem,
    updateItem,
    deleteItem,
    getAllItemsInACategory,
    getItemById
}

function getAllItems() {
    return db('item')
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