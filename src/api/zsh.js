import axios from './index';
/*朱双慧的接口*/
//获取轮播图
export let getBanner=()=>axios.get(`/banner`);
//获取推荐歌单
export let getTuiJians=()=>axios.get(`/personalized`);
//获取独家放送
export let getDuJias=()=>axios.get(`/personalized/privatecontent`);
//最新音乐
export let getNewSong=()=>axios.get(`/personalized/newsong`);
//推荐mv
export let getMV=()=>axios.get(`/personalized/mv`);