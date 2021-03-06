import { takeLatest, call, put, all } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions'

import ShopActionTypes from './shopTypes'

export function* fetchCollectionsAsync() {
    yield console.log('I am fired');

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error){
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync )
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ])
}