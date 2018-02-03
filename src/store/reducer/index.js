import {combineReducers} from 'redux';
import homeReducer from './home';
import profileReducer from "./profile";

import mymusicReducer from './mymusic'
import friendReducer from './friend'
import commentReducer from './comment';

import common from './common';

export default combineReducers({
    homeReducer,
    profileReducer,
    friendReducer,
    common,
    mymusicReducer,
    commentReducer,
});