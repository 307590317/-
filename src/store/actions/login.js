import * as Types from "../action-Types";
import {getLogin} from "../../api/txl.js";
let actions={
  numberLogin:(phone,password,history)=>{
    return function(dispatch,getState){
      getLogin(phone,password).then(function(data){
        console.log(data);
        dispatch({type:Types.LOGIN_NUMBER_LOGIN,id:data.account.id});
        history.push("/");
      });
    }
  }
};
export default actions;