import React from 'react';
import avatar from "./images/avator.png";
export default class Dynamic extends React.Component {
  render(){
    return (
        <div className="profile-detail-dynamic">
          <ul>
            <li>
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>
    )
  }
}