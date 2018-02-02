import * as Types from '../action-Types';
import {getRecord,getUserList,getUserDj} from "../../api/gjx";
let actions={
  //获取最近播放的信息( type=1 时只返回 weekData, type=0 时返回 allData)
  getRecordAPI(id){
    return (dispatch,getState)=>{
      dispatch({type:Types.GET_RECORD,payload:getRecord(id)});
    }
  }
}
export default actions;
