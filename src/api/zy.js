import axios from './index';
/*赵煜的接口*/
//搜索接口
/*
* 说明 :
* 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 ,
* 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 ,
* 可通过 /music/url 接口传入歌曲 id 获取具体的播放链接
* keywords : 关键词(必选参数)
*/
export let search=(value)=>axios.get(`/search?keywords=${value}`);