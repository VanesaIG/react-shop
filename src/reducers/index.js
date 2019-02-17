import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import StoreReducer from './StoreReducer';

export default combineReducers({
    CartReducer: CartReducer,
    StoreReducer: StoreReducer
})