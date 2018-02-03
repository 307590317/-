import {createStore,applyMiddleware} from 'redux';
import  reduxLogger  from 'redux-logger'
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducers from './reducer';

let store= createStore(reducers,applyMiddleware(reduxThunk,reduxPromise));
window._store=store;
export default store;
