import axios from './index';
/*高佳兴的接口*/
//获取最近播放的信息( type=1 时只返回 weekData, type=0 时返回 allData)
export let getRecord=(id)=>axios.get(`/user/record?uid=${id}&type=1`);
//获取用户电台信息
export let getUserDj=(id)=>axios.get(`/user/dj?uid=${id}`);
