export function addToCart(name, price) {
    return {
        type: 'ADD_TO_CART',
        payload: {name: name, price: price, count: 1}
    }
}

export function removeFromStore(name) {
    return {
        type: 'REMOVE_FROM_STORE',
        payload: name
    }
}

export function removeFromCart(name) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: name
    }
}

export function addToStore(name) {
    return {
        type: 'ADD_TO_STORE',
        payload: name
    }
}

export function emptyCart(cartItems) {
    return {
        type: 'EMPTY_CART',
        payload: cartItems
    }
}

export function removeAll(cartItems) {
    return {
        type: 'REMOVE_ALL',
        payload: cartItems
    }
}