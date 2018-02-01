import axios from './index';
/*谭晓磊的接口*/
//获取用户详情信息
export let getUserDetail=(id)=>axios.get(`/user/detail?uid=${id}`);