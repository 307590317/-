import * as Types from '../action-Types';

let initState = {
    hotComments: [],
    comments: [],
    moreHot: true,
    total: '',
    more: true,
    code: '',
    songs:[
        {
            name:"",
            id:0,
            ar:[{name:''}],
            al:{picUrl:""},
            dt:0
        }
    ]
};

function commentReducer(state = initState, action) {
    //匹配派发的行为
    switch (action.type) {
        case Types.GET_COMMENT:
            return {...state, ...action.payload};//返回新的状态覆盖默认的状态
        case Types.GET_SONGDETAIL:
            return {...state, ...action.payload};
    }
    return state;
}

export default commentReducer;