import * as Types from "../action-Types";
let initState={
  userInfo:{
    profile:{}
  },
  userDynamic:{
    events:[]
  }
};
function profileReducer(state=initState,action){
  switch (action.type){
    case Types.GET_PROFILE:
      return {...state,userInfo:action.userInfo};
    case Types.GET_PROFILE_DYNAMIC:
      return {...state,userDynamic:action.payload};
  }

  return state;
}
export default profileReducer;