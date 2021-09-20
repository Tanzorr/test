import {takeEvery} from 'redux-saga/effects';
import {UserActionTypes} from "./user.action.types";

export function* fetchCollectionsAsync(){
   yield console.log('First sagas')
}

export function* fetchCollectionsStart(){
    yield takeEvery(UserActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    );
}