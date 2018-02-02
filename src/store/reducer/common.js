import * as Types from "../action-Types";
let initState={userId:null,userList:{}};

let getUserId=(state=initState,action)=>{
  switch (action.type){
    case Types.GET_USERID:
      return {...state,userId:action.id};
    case Types.GET_USERLIST:
      return {...state,userList:action.payload};
  }
  return state;
};
export default getUserId;