import {combineReducers} from 'redux';
import homeReducer from './home';
import regReducer from "./reg";
import mymusicReducer from './mymusic';
export default combineReducers({
  homeReducer,
  regReducer,
  mymusicReducer
})