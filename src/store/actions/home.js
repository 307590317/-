import * as Types from '../action-Types';

import {getBanner,getTuiJians,getDuJias,getNewSong} from "../../api/zsh";


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
    },
    getDuJiasAPI(){
        return function (dispatch,getState){
            dispatch({type:Types.GET_UNIQUE,payload:getDuJias()});
        }
    },
    getNewSongAPI(){
        return function (dispatch,getState){
            dispatch({type:Types.GET_NEW,payload:getNewSong()});
        }
    },
};


export default actions;

