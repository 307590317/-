import * as Types from '../action-Types';

import {getComment} from '../../api/zsq';

let actions={
    getCommentAPI(){
        return function (dispatch,getState) {
            dispatch({type:Types.GET_COMMENT,commentData:getComment()});
        }
    }
};
export  default actions;