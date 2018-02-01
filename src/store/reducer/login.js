import * as Types from "../action-Types";
function loginReducer(state={},action){
  switch (action.type){
    case Types.LOGIN_NUMBER_LOGIN:
      return {...state,userId:action.id}
  }
  return state;
}
export default loginReducer;