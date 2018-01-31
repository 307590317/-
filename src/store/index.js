import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducer from './reducer';
let store=createStore(reducer,applyMiddleware(reduxThunk,reduxPromise));
window._store=store;
export default store;
