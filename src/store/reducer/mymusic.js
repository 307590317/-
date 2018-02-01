import * as Types from '../action-Types';

let initState = {};

let mymusicReducer = function (state = initState, action) {
  switch (action.type) {
    case Types.GET_RECORD:
      return {...state, record: action.payload};
  }
  return state;
};
export default mymusicReducer