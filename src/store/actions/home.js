import * as Types from '../action-Types';
import {getBanner,getTuiJians} from '../../api/home';

let actions={
  getBannerAPI(){
      return function (dispatch,getState){
          dispatch({type:Types.GET_BANNER,payload:getBanner()});
      }
  },
    getTuiJiansAPI(){
        return function (dispatch,getState){
            dispatch({type:Types.GET_RECOMMEND,payload:getTuiJians()});
        }
    }
};

export default actions;
