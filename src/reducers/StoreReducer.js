const data = [
    { category: "Sporting Goods", price: "$49.99", inStock: 10, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", inStock: 5, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", inStock: 0, name: "Basketball" },
    { category: "Electronics", price: "$99.99", inStock: 7, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", inStock: 0, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", inStock: 11, name: "Nexus 7" }
]
export default function (state = data, action) {
    switch (action.type) {
        case 'REMOVE_FROM_STORE':
            return [...state].map(el => {
                if (el.name === action.payload) {
                    el.inStock--;
                } return el;
            })
        case 'ADD_TO_STORE':
            return [...state].map(el => {
                if (el.name === action.payload) {
                    el.inStock++;
                } return el;
            })
        case 'EMPTY_CART':
            let arr = [...state]
            action.payload.forEach(cartEl => {
                arr.forEach(storeEl => {
                    if (cartEl.name === storeEl.name) {
                        storeEl.inStock += cartEl.count;
                    }
                })
            })
            return arr;
        default:
            return state;
    }
}