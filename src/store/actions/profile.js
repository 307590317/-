import * as Types from "../action-Types";
import {getUserDetail,getUserDynamic} from "../../api/txl.js";
import commonActions from "./common.js";
let actions={
  getProfileAPI:()=>{
    return function(dispatch,getState){
      let id=getState().common.userId;
      if(id){
        getUserDetail(id).then(function(data){
          //console.log(data);
          let val={...data};
          dispatch({type:Types.GET_PROFILE,userInfo:val});
        });
      }

    }
  },
  getMusicListAPI:()=>{
    return function(dispatch,getState){
      let id=getState().common.userId;
      let list=getState().common.userList;
      if(id&&Object.keys(list).length===0){
        commonActions.getUserListAPI(id)(dispatch,getState);
      }
    }
  },
  getDynamicAPI:()=>{
    return function(dispatch,getState){
     // let id='1352132331';
      let id=getState().common.userId;
      if(id){
        dispatch({type:Types.GET_PROFILE_DYNAMIC,payload:getUserDynamic(id)});
      }
    }
  },
};
export default actions;