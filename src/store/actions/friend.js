import * as Types from '../action-Types';
import {getComment} from '../../api/zsq'
let friendDynamicActions={
    get_friend_dynamic_detail_comments:(id,limit)=>{
        return (dispatch,getState)=>{
            dispatch({type:Types.GET_PREFECT_COMMENT_FROM_FRIEND_DYNAMIC,payload:getComment(id,limit)});
        }
    }
};
export  default  friendDynamicActions