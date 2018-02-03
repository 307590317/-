import * as Types from '../action-Types';
let initState={
    isMusician: false,
    userId: -1,
    topComments: [],
    moreHot: true,
    hotComments:[],
    comments:[],
    total:"",
    more:true
};
function friendReducer(state=initState,action) {
    switch (action.type){
        case Types.GET_PREFECT_COMMENT_FROM_FRIEND_DYNAMIC:
            console.log('reducer');
            console.log({...action.payload},"action.payload");
           /* console.log( ...state,...action.payload,"two");没数据*/
            return {...state,...action.payload};
    }
    return state;
}
export  default friendReducer;