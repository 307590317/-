import * as Types from '../action-Types';

import {getComment} from '../../api/zsq';

let actions={
    getCommentAPI(id,limit){
        return function (dispatch,getState) {
            dispatch({type:Types.GET_COMMENT,payload:getComment(id,limit)})
        }
    }
};
export  default actions;