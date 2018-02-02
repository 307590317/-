import {combineReducers} from 'redux';
import homeReducer from './home';
import profileReducer from "./profile";
import mymusciReducer from './mymusic';
import comment from './comment';
import friendReducer from './friend'
import common from './common';

export default combineReducers({
    homeReducer,
    comment,
    profileReducer,
    friendReducer,
    common,
    mymusciReducer,
});