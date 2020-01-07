const db = require('../dbConfig');

module.exports = {
    getUserCart,
    addItemToUserCart,
    removeItemFromCart,
    updateItemInUserCart,
    getCartId,
    getCartById,
    itemExistsInUserCart,
    findProductInUserCart
}

// get cart by user id
function getCartId(id) {
    return db('shopping_cart').where({user_id: id})
}

// gets items from user cart by cart id
async function getCartById(id) {
    const cartId = await db('shopping_cart').where({ id: id })
    return await db('cart_items').where({ cart_id: cartId[0].id })
}

// gets items in user's cart by user id
async function getUserCart(id) {
    const cartId = await getCartId(id)
    return await db('cart_items').where({ cart_id: cartId })
}

// add item to user's cart
async function addItemToUserCart(obj) {
    const itemExist = await findProductInUserCart(obj.cart_id, obj.product_id)

    if(itemExist.length > 0) {
        return await itemExistsInUserCart(obj.cart_id, obj.product_id)
    } else {
        await db('cart_items').insert(obj)
    }
}

// update item in the user's cart
async function updateItemInUserCart(cartId, obj) {
    return await db('cart_items')
        .where({cart_id: cartId})
        .andWhere({product_id: obj.product_id})
        .update(obj)
}

// remove item from users cart
async function removeItemFromCart(cartId, product) {
    return await db('cart_items')
        .where({cart_id: cartId})
        .andWhere({product_id: product})
        .delete();
}

async function findProductInUserCart(cartId, prodId) {
    const product = await db('cart_items')
        .where({ cart_id: cartId })
        .andWhere({ product_id: prodId })
        return product
}

// user already has this item in their cart, update the items quantity by one
async function itemExistsInUserCart(cartId, prodId) {
    const items = await getCartById(cartId);
    const filtered = items.filter(i => i.product_id === prodId);
    if(filtered.length > 0) {
        const toBeUpdated = filtered[0];
        toBeUpdated.quantity = toBeUpdated.quantity + 1
        await updateItemInUserCart(cartId, toBeUpdated);
    }
}

