import * as Types from "../action-Types";
import {getUserId, getUserList} from "../../api/common";
import {getMP3, getSongDetail} from "../../api/zsq";

let actions = {
  getUserIdAPI: (phone, password, history) => {
    return function (dispatch, getState) {
      getUserId(phone, password).then(function (data) {
        dispatch({type: Types.GET_USERID, id: data.account.id});
        history.push("/");
      });
    }
  },
  //获取用户歌单详情
  getUserListAPI: (id) => {
    return function (dispatch, getState) {
      dispatch({type: Types.GET_USERLIST, payload: getUserList(id)});
    }
  },
  //退出登录
  clearUserIdAPI: () => {
    return function (dispatch, getState) {
      dispatch({type: Types.EXIT_LOGIN, id: ''});
    }
    // return {type:Types.EXIT_LOGIN,id:''}
  },
  //修改详情页的显示隐藏标识
  changeDetailHide() {
    return {type: Types.CHANGE_DETAILHIDE}
  },
  getMusicIdAPI(musicId){
    return {type:Types.GET_MUSICID,musicId}
  },
  getMusicUrlAPI(musicId){
    return function (dispatch, getState) {
      dispatch({type:Types.GET_MUSICURL,payload:getMP3(musicId)});
      dispatch({type:Types.GET_SONGDETAIL,payload:getSongDetail(musicId)})
    }
  }
};
export default actions;