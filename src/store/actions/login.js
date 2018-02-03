import * as Types from "../action-Types";
import {getUserId} from "../../api/common";
let actions={
  numberLogin:(phone,password,history)=>{
    return function(dispatch,getState){
      getUserId(phone,password).then(function(data){
        console.log(data);
        dispatch({type:Types.LOGIN_NUMBER_LOGIN,id:data.account.id});
        history.push("/");
      });
    }
  }
};
export default actions;