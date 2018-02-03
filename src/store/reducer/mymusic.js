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
let initState={
  record:{weekData:[]},
  dj:{},
  collect:{},
  flag:true
};
let mymusicReducer=function (state=initState,action) {
  switch (action.type){
    case Types.GET_NEARLY:
     return{...state,record:action.payload};
  // return {...state,"weekData":[],"code": 200}
   case Types.GET_RADIO:
     return{...state,dj:action.payload};
    case Types.GET_NEARLY_EMPTY:
      /*返回的状态为清空后的数据，和修改后的标识*/
      return{...state,record:{weekData:[]},flag:!state.flag};
    //{
    //  record:{weekData:[100tiao]},
    //  dj:{},
    //  collect:{},
    //  record:{weekData:[]}，
    //  flag:true
    // }
    // case Types.FLAG_CHANGE:
    //   return{...state,flag:}
 }
  return state;
};
export default mymusicReducer;