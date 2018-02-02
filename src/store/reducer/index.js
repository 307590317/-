import {combineReducers} from 'redux';
import homeReducer from './home';
import profileReducer from "./profile";
import commentReducer from './comment';
import mymusicReducer from './mymusic';
import mymusciReducer from './mymusic';
import friendReducer from './friend'
import common from './common';

export default combineReducers({
    homeReducer,
    profileReducer,
    friendReducer,
    common,
    mymusciReducer,
    commentReducer,
});