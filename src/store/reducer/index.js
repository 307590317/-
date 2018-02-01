import {combineReducers} from 'redux';
import homeReducer from './home';
import userDetail from "./userDetail";
import loginReducer from "./login";
import profileReducer from "./profile";
import mymusicReducer from './mymusic';
import comment from './comment';

export default combineReducers({
  homeReducer,
  userDetail,
  mymusicReducer,
  comment,
  loginReducer,
  profileReducer
})