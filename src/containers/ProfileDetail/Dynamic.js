import React from 'react';
import avatar from "./images/avator.png";
import {connect} from "react-redux";
import actions from "../../store/actions/profile";
import {dataForMata} from "../../common/util";

@connect(state=>({...state.common,...state.profileReducer}),actions)
export default class Dynamic extends React.Component {
  componentDidMount(){
    this.props.getDynamicAPI();
  }
  render(){
    console.log(this.props.userDynamic);
    let userDynamic=this.props.userDynamic||{};
    let list=userDynamic.events||[];
    return (
        <div className="profile-detail-dynamic">
          <ul>
            {list.map((item,index)=>{
              let originUrl=item.pics.length>0?item.pics[0].originUrl:JSON.parse(item.json).event.pics[0].originUrl;
              let songName='';
              if(JSON.parse(item.json).song){
                 songName=JSON.parse(item.json).song.name;
              }else if(JSON.parse(item.json).event){
                  if(JSON.parse(JSON.parse(item.json).event.json).song){
                    songName=JSON.parse(JSON.parse(item.json).event.json).song.name;
                  }
              }
              let personName='';
              if(JSON.parse(item.json).song){
                personName=JSON.parse(item.json).song.artists[0].name;
              }else if(JSON.parse(item.json).event){
                if(JSON.parse(JSON.parse(item.json).event.json).song){
                  personName=JSON.parse(JSON.parse(item.json).event.json).song.artists[0].name;
                }
              }
               return (
                   <li key={index}>
                     <img src={item.user.avatarUrl} className="avatar"/>
                     <div className="dynamic-detail">
                       <h4>{item.user.nickname}</h4>
                       <p className="time">{dataForMata(item.showTime)}</p>
                       <p className="dynamic-content">{JSON.parse(item.json).msg}</p>
                       <div className="music-img">
                         <img src={originUrl}/>
                       </div>
                       {songName?<div className="Sharing-music">
                         <img src={avatar}/>
                         <h5>{songName}</h5>
                         <p>周杰伦</p>
                       </div>:null}

                       <div className="interactive">
                         <span><i className="iconfont icon-zan"></i>{item.info.likedCount?item.info.likedCount:"赞"}</span>
                         <span><i className="iconfont icon-pinglun"></i>{item.info.commentCount?item.info.likedCount:"评论"}</span>
                         <span><i className="iconfont icon-fenxiang1"></i>{item.info.shareCount?item.info.likedCount:"分享"}</span>
                         <span><i className="iconfont icon-101"></i></span>
                       </div>
                     </div>
                   </li>
               )
            }




            )}

            {/*<li>
              <img src={avatar} className="avatar"/>
              <div className="dynamic-detail">
                <h4>熊博士的音乐</h4>
                <p className="time">13:04</p>
                <p className="dynamic-content">第三首歌</p>
                <div className="music-img">
                  <img src={avatar}/>
                </div>
                <div className="Sharing-music">
                  <img src={avatar}/>
                  <h5>等你下课</h5>
                  <p>周杰伦</p>
                </div>
                <div className="interactive">
                  <span><i className="iconfont icon-zan"></i>赞</span>
                  <span><i className="iconfont icon-pinglun"></i>评论</span>
                  <span><i className="iconfont icon-fenxiang1"></i>分享</span>
                  <span><i className="iconfont icon-101"></i></span>
                </div>
              </div>
            </li>*/}
          </ul>
        </div>
    )
  }
}