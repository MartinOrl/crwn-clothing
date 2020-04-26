import { all, call } from 'redux-saga/effects'

import { shopSagas } from './shop-reducer/shopSagas'

import { userSagas } from './user-reducer/userSaga'

import { cartSagas } from './cart-reducer/cartSaga'

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}