import * as Types from '../action-Types';

/*
let initState = {record:{weekData:[]}};

let mymusicReducer = function (state = initState, action) {
  switch (action.type) {
    case Types.GET_RECORD:
      return {...state,record: action.payload};
  }
  return state;
};
export default mymusicReducer*/

let initState={record:{weekData:[]},dj:{},collect:{}};
let mymusicReducer=function (state=initState,action) {
  switch (action.type){
    case Types.GET_NEARLY:
     return{...state,record:action.payload};
   case Types.GET_RADIO:
     return{...state,dj:action.payload};
 }
  return state;
};
export default mymusicReducer;