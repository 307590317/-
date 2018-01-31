import * as Types from '../action-Types';

let initState = {banners:[]};

function homeReducer(state = initState, action) {

    switch (action.type) {

        case Types.GET_BANNER:
            return {...state, ...action.payload};
        case Types.GET_RECOMMEND:
            return{...state,...action.payload}
    }

    return state;
}


export default homeReducer;