import {put, takeEvery, takeLatest, call} from 'redux-saga/effects';
import {UserActionTypes} from "./user.action.types";
import api from "../../api/api";
import {editUserSuccessAC, getUsers, setUserSuccessAC, deleteUserSuccessAC} from "./user.action";

export function* fetchUsersWorker(){
   const data = yield call(api.getAll)
   const json = yield call(()=> new Promise(res=>res(data.json())))
    yield  put(getUsers(json));
}

export  function* usersWatcher(){
  yield takeEvery(UserActionTypes.FETCH_USERS, fetchUsersWorker)
}

export function* setUserStart(action){
    try{
        const userResponse = yield  api.set('users', action.payload);
        if(userResponse.status === 200){
            yield put(setUserSuccessAC(action.payload));
        }else {
            console.log(userResponse)
        }

    }catch (error) {
      console.log(error)
    }
}

export function* onSetUserStart() {
    yield takeEvery(UserActionTypes.SET_USER_START, setUserStart)
}

export function* editUserStart(action){
    try{
        const userResponse = yield  api.edit('user', action.payload, action.id,);
        console.log('userResponse', userResponse);
        if(userResponse.status === 200){
            yield put(editUserSuccessAC(action.payload, action.id))
        }
    }catch (error) {
        console.log('error edit', error)
    }
}


export function* onEditUserStart() {
    yield takeEvery(UserActionTypes.EDIT_USER_START, editUserStart)
}

export function* deleteUserStart(action){
    try{
        const userResponse = yield  api.delete('user', action.payload);
        if(userResponse.status === 200){
            yield put(deleteUserSuccessAC(action.payload));
        }
    }catch (error) {
        console.log('Error', error);
    }
}

export function* onDeleteUserStart() {
    yield takeEvery(UserActionTypes.DELETE_USER_START, deleteUserStart)
}


