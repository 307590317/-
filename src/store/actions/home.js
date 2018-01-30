import * as Types from '../action-Types';
import {getBanner} from '../../api/home';

let actions={
  getBannerAPI(){
    console.log(1);
    return function (dispatch,getState){
          dispatch({type:Types.GET_BANNER,payload:getBanner()});
      }
  }
};
