import axios from './index';
// 登录接口(可获取到用户的id)
export let getLogin=(phone,password)=>axios.get(`/login/cellphone?phone=${phone}&password=${password}`);
//获取用户歌单
export let getUserList=(id)=>axios.get(`/user/playlist?uid=${id}`);
