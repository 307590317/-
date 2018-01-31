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

/*谭晓磊的接口*/
// 登录接口
export let getLogin=(phone,password)=>axios.get(`/login/cellphone?phone=${phone}&password=${password}`);
//获取用户详情信息
export let getUserDetail=(id)=>axios.get(`/user/detail?uid=${id}`);

/*高佳兴的接口*/
//获取最近播放的信息
export let getRecord=(id)=>axios.get(`/user/record?uid=${id}&type=1`);
//获取用户电台信息
export let getUserDj=(id)=>axios.get(`/user/dj?uid=${id}`);
//获取用户歌单
export let getUserList=(id)=>axios.get(`/user/playlist?uid=${id}`);

/*左素倩的接口*/
//获取歌曲详情
export let getSongDetail=(id)=>axios.get(`/song/detail?ids=${id}`);
//获取歌词
export let getLyric=(id)=>axios.get(`/lyric?id=${id}`);
//获取评论
export let getComment=(id,limit)=>axios.get(`/comment/music?id=${id}&limit=${limit}`);
//喜欢音乐(isLike:布尔值 , 默认为 true 即喜欢 , 若传 false, 则取消喜欢)
export let likeMusic=(id,isLike=true)=>axios.get(`/${isLike}?id=${id}`);

/*
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
export let getVip=()=>axios.get(`/vip`);*/
