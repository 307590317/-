import * as Types from "../action-Types";
let initState={userId:null,userList:{playlist:[]}};

let getUserId=(state=initState,action)=>{
  switch (action.type){
    case Types.GET_USERID:
      return {...state,userId:action.id};
    case Types.GET_USERLIST:
      return {...state,userList:action.payload};
    case Types.EXIT_LOGIN:

      return {...state,userId:action.id}
  }
  return state;
};
export default getUserId;