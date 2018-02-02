import * as Types from '../action-Types';

import {getComment,getSongDetail} from '../../api/zsq';

let actions={
    getCommentAPI(id,limit){
        return function (dispatch,getState) {
            dispatch({type:Types.GET_COMMENT,payload:getComment(id,limit)})
        }
    },
    getSongDetailAPI(id){
        return function (dispatch,getState) {
            dispatch({type:Types.GET_SONGDETAIL,payload:getSongDetail(id)})
        }
    }
};
export default actions;