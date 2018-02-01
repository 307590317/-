import {combineReducers} from 'redux';
import homeReducer from './home';
import regReducer from "./reg";

import loginReducer from "./login";
import profileReducer from "./profile";
import mymusicReducer from './mymusic';
import commentReducer from './comment';

export default combineReducers({
    homeReducer,
    regReducer,
    mymusicReducer,
    commentReducer,
    loginReducer,
    profileReducer
})