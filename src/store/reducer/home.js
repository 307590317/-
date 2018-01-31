import * as Types from '../action-Types';

let initState={name:1};

function homeReducer(state=initState,action){
switch (action.type){
    case Types.GET_BANNER:
        return{...state,banner:action.payload}
}
    return state;
}
export default homeReducer;