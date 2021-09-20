import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import userReducer from "./user/user.reducer";
import {usersWatcher, onSetUserStart, onEditUserStart, onDeleteUserStart} from "./user/user.sagas";
import {all} from "redux-saga/effects";

function* rootWatcher(){
    yield all([usersWatcher(), onSetUserStart(), onEditUserStart(), onDeleteUserStart()])
}

const  sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];



const reducers = combineReducers({
    user:userReducer
});

let store = createStore(reducers, applyMiddleware(...middlewares));
window.store = store;

export default  store;

sagaMiddleware.run(rootWatcher)