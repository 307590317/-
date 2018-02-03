import * as Types from "../action-Types";

function profileReducer(state={},action){
  switch (action.type){
    case Types.GET_PROFILE:
      return {...state,userInfo:action.userInfo};
    case Types.GET_PROFILE_DYNAMIC:
      return {...state,userDynamic:action.payload};
  }

  return state;
}
export default profileReducer;