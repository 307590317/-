import * as Types from '../action-Types';
let initState={id:0,limit:10};

function  commentReducer(state=initState,action){
    switch (action.type){
        case Types.GET_COMMENT:
            return {...state,value:action.payload}
    }
    return state;
}
export default commentReducer;