import {combineReducers} from 'redux';
import homeReducer from './home';
import userDetail from "./userDetail";
import loginReducer from "./login";
import profileReducer from "./profile";
import mymusicReducer from './mymusic';
import commentReducer from './comment';

export default combineReducers({
    homeReducer,
    mymusicReducer,
    commentReducer,
    loginReducer,
    userDetail,
    profileReducer
})