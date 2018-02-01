import * as Types from "../action-Types";
import {getUserDetail} from "../../api/txl.js";
let actions={
  getProfile:(id)=>{
    return function(dispatch,getState){
      getUserDetail(id).then(function(data){
        //console.log(data);
        let val={...data};
        dispatch({type:Types.GET_PROFILE,userInfo:val});
      });
    }
  }
};
export default actions;