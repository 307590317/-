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
let initState={weekData:[]};
let mymusicReducer=function (state=initState,action) {
  switch (action.type){
    case Types.GET_NEARLY:
      return {...state,...action.payload}
      // return {...state,"weekData":[],"code": 200}
  }
  return state;
};
export default mymusicReducer;