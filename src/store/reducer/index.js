import {combineReducers} from 'redux';
import homeReducer from './home';
import regReducer from "./reg";

export default combineReducers({
  homeReducer,
  regReducer
})