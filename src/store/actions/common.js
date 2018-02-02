import * as Types from "../action-Types";
import {getUserId,getUserList} from "../../api/common";

let actions={
  getUserIdAPI:(phone,password,history)=>{
    return function(dispatch,getState){
      getUserId(phone,password).then(function(data){
        dispatch({type:Types.GET_USERID,id:data.account.id});
        history.push("/");
      });
    }
  },
  //获取用户歌单详情
  getUserListAPI:(id)=>{
    return function (dispatch,getState) {
      dispatch({type:Types.GET_USERLIST,payload:getUserList(id)});
    }
  }
};
export default actions;