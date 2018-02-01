import {combineReducers} from 'redux';
import homeReducer from './home';
import userDetail from "./userDetail";
import mymusicReducer from './mymusic';
export default combineReducers({
  homeReducer,
  userDetail,
  mymusicReducer
})