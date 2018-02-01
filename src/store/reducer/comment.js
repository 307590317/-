import * as Types from '../action-Types';
let initState={};

let commentReducer=function(state=initState,action){
    switch (action.type){
        case Types.GET_COMMENT:
            return {...state,...action.commentData}
    }
    return state;
};
export default commentReducer;