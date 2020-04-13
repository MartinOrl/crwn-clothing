import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from './user-reducer/userReducer'
import cartReducer from './cart-reducer/cartReducer'
import directoryReducer from './directory-reducer/directoryReducer'
import shopReducer from './shop-reducer/shopReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})


export default persistReducer(persistConfig, rootReducer)