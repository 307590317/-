import {combineReducers} from 'redux';
import homeReducer from './home';
import profileReducer from "./profile";
import mymusciReducer from './mymusic';
import comment from './comment';
import common from './common';
export default combineReducers({
  homeReducer,
  comment,
  common,
  mymusciReducer,
  profileReducer
})