import {combineReducers} from 'redux';
import homeReducer from './home';
import regReducer from "./reg";
import mymusicReducer from './mymusic';
import comment from './comment';
export default combineReducers({
  homeReducer,
  regReducer,
  mymusicReducer,
  comment
})