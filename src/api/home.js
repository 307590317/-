import axios from './index';
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
//歌单





//获取推荐歌单中的某一个(方法名后不带s)
export let getTuiJian=(id)=>axios.get(`/musicList?id=${id}`);
//修改某一歌单试听参数
export let putTuiJian=(id)=>axios.put(`/musicList?id=${id}`);

//获取精选专栏(方法名后面带s)
export let getJingXuans=()=>axios.get(`/selections`);
//获取精选专栏中的一个(方法名后不带s)
export let getJingXuan=(id)=>axios.get(`/selections?id=${id}`);
//修改某一歌单试听参数
export let putJingXuan=(id)=>axios.put(`/selections?id=${id}`);
//获取vip数据
export let getVip=()=>axios.get(`/vip`);


// 登录接口
export let getLogin=(phone,password)=>axios.get(`/login/cellphone?phone=${phone}&password=${password}`);
//获取用户详情信息
export let getProfileDetail=(id)=>axios.get(`/user/playlist?uid=${id}`);


