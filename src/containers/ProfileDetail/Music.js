import React from 'react';
import "./index.less";
import avatar from  "./images/avator.png";
export default class Music extends React.Component {
  render(){
    return (
        <div className="profile-detail-music">
          <div className="route-title">歌单(7)</div>
          <ul>
            <li>
              <img src={avatar}/>
              <div className="music-detail">
                <h4>听歌排行</h4>
                <p>累计听歌33433首</p>
              </div>
            </li>
            <li>
              <img src={avatar}/>
              <div className="music-detail">
                <h4>听歌排行</h4>
                <p>累计听歌33433首</p>
              </div>
            </li>
          </ul>
        </div>
    )
  }
}