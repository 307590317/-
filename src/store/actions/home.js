import * as Types from '../action-Types';
import {getBanner} from "../../api/zsh";

let actions={
  getBannerAPI(){
    return function (dispatch,getState){
      dispatch({type:Types.GET_BANNER,payload:getBanner()});
      }
  }
};
export default actions;