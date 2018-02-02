import * as Types from '../action-Types';

let initState = {banners:[],recommend:{result:[]},unique:{result:[]},new:{result:[]}};

function homeReducer(state = initState, action) {

    switch (action.type) {
        case Types.GET_BANNER:
            return {...state, ...action.payload};
        case Types.GET_RECOMMEND:
            return{...state,recommend:{...action.payload}};
        case Types.GET_UNIQUE:
            return{...state,unique:{...action.payload}};
            case Types.GET_NEW:
            return{...state,new:{...action.payload}}
    }

    return state;
}

export default homeReducer;