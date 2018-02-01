import {combineReducers} from 'redux';
import homeReducer from './home';
import regReducer from "./reg";

import loginReducer from "./login";
import profileReducer from "./profile";
import mymusicReducer from './mymusic';
export default combineReducers({
  homeReducer,
  regReducer,
  loginReducer,
  profileReducer,
  mymusicReducer
})