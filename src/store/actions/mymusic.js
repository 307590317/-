import * as Types from '../action-Types';
/*
import {getRecord,getUserList,getUserDj} from "../../api/gjx";
let actions={
  //获取最近播放的信息( type=1 时只返回 weekData, type=0 时返回 allData)
  getRecordAPI(id){
    return (dispatch,getState)=>{
      dispatch({type:Types.GET_RECORD,payload:getRecord(id)});
    }
  }
};
export default actions;*/
import {getRecord,getUserDj} from "../../api/gjx";
import {getUserList} from '../../api/common';

let actions={
  getRecordAPI(id){
    //getRecord(id);
    //return {type:Types.GET_NEARLY,data:getRecord(id).then()};
    return (dispatch,getState)=>{
      dispatch({type:Types.GET_NEARLY,payload:getRecord(id)})
    }
  },

  getUserDjAPI(id){
    return (dispatch,getState)=>{
    dispatch({type:Types.GET_RADIO,payload:getUserDj(id)})
    }
  },
};

export default actions;
