import axios from './index';
/*谭晓磊的接口*/
// 登录接口
export let getLogin=(phone,password)=>axios.get(`/login/cellphone?phone=${phone}&password=${password}`);
//获取用户详情信息
export let getUserDetail=(id)=>axios.get(`/user/detail?uid=${id}`);