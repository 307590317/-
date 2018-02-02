import {combineReducers} from 'redux';
import homeReducer from './home';
import userDetail from "./userDetail";
import loginReducer from "./login";
import profileReducer from "./profile";
import commentReducer from './comment';
import mymusicReducer from './mymusic';

export default combineReducers({
    homeReducer,
    mymusicReducer,
    commentReducer,
    loginReducer,
    userDetail,
})