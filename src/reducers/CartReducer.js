export default function (state = [], action) {
    let arr = [...state];
    switch (action.type) {
        case 'ADD_TO_CART':
            if (arr.length === 0) {
                arr.push(action.payload)
            } else {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].name === action.payload.name) {
                        arr[i].count++;
                        break;
                    } else if (i === arr.length - 1) {
                        arr.push(action.payload);
                        break;
                    }
                }
            }
            return arr;
        case 'REMOVE_FROM_CART':
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name === action.payload) {
                    if (arr[i].count > 1) {
                        arr[i].count--;
                    } else arr.splice(i, 1);
                }
            }
            return arr;
        case 'REMOVE_ALL':
            return [];
        default:
            return state
    }
}