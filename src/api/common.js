import axios from './index';
// 登录接口(可获取到用户的id)
export let getUserId=(phone,password)=>axios.get(`/login/cellphone?phone=${phone}&password=${password}`);
//获取用户歌单
export let getUserList=(id)=>axios.get(`/user/playlist?uid=${id}`);



//对象.playlist
/*
playlist.length

item

图片src:item.coverImgUrl
歌单名称:item.name
几首歌:item.trackCount*/
