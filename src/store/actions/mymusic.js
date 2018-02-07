import * as Types from '../action-Types';
import {getRecord,getUserDj} from "../../api/gjx";
import {getUserList} from '../../api/common';
let actions={
  getRecordAPI(id){//id='248846943'
    return (dispatch,getState)=>{
      dispatch({type:Types.GET_NEARLY,payload:getRecord(id)})
  // dispatch({type:Types.GET_NEARLY,payload:{"weekData":[],"code": 200}})
    }
  },

  getUserDjAPI(id){
    return (dispatch,getState)=>{
    dispatch({type:Types.GET_RADIO,payload:getUserDj(id)})
    }
  },

  /*清除数据的同时修改标识*/
  clearNearlyEmpty(){
    return(dispatch,getState)=>{
      dispatch({type:Types.GET_NEARLY_EMPTY})
    }
  },
};
export default actions;
