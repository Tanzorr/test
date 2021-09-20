import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
const  sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

import userReducer from "./user/user.reducer";

const reducers = combineReducers({
    user:userReducer
});

let store = createStore(reducers, applyMiddleware(...middlewares));
window.store = store;

export default  store;