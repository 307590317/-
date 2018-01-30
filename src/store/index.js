import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducers from './reducer/index';
import  reduxLogger  from 'redux-logger';



let store= createStore(reducers,applyMiddleware(reduxThunk,reduxPromise,reduxLogger));
window._store=store;
export default store;
