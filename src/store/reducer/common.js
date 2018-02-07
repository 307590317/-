import * as Types from "../action-Types";
let initState={
  userId:null,
  userList:{playlist:[]},
  detailHide:true,
  musicId:null,
  mp3Url:null
};
//let initState={userId:"1352132331",userList:{playlist:[]}};

let getUserId=(state=initState,action)=>{
  switch (action.type){
    case Types.GET_USERID:
      return {...state,userId:action.id};
    case Types.GET_USERLIST:
      return {...state,userList:action.payload};
    case Types.EXIT_LOGIN:
      return {...initState};
    case Types.CHANGE_DETAILHIDE:
      return {...state,detailHide:!state.detailHide};
    case Types.GET_MUSICID:
      return {...state,musicId:action.musicId};
    case Types.GET_MUSICURL:
      return {...state,mp3Url:action.payload.data[0].url}
  }
  return state;
};
export default getUserId;