import axios from './index';
/*左素倩的接口*/
//获取歌曲详情
export let getSongDetail=(id)=>axios.get(`/song/detail?ids=${id}`);
//获取歌词
export let getLyric=(id)=>axios.get(`/lyric?id=${id}`);
//获取评论
export let getComment=(id,limit='20')=>axios.get(`/comment/music?id=${id}&limit=${limit}`);
//喜欢音乐(isLike:布尔值 , 默认为 true 即喜欢 , 若传 false, 则取消喜欢)
export let likeMusic=(id,isLike=true)=>axios.get(`/${isLike}?id=${id}`);
//根据音乐id获取到对应的MP3
export let getMP3=(id)=>axios.get(`/music/url?id=${id}`)