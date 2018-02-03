import React from 'react';
import {connect} from "react-redux";
import "./index.less";
import avatar from  "./images/avator.png";
import actions from "../../store/actions/profile";
import commonActions from "../../store/actions/common";

import {NavLink} from "react-router-dom";
@connect(state=>({...state.common}),{...actions,...commonActions})
export default class Music extends React.Component {
  componentDidMount(){
    let id=this.props.userId;
    let list=this.props.userList.playlist;
    if(id&&list.length===0){
      this.props.getUserListAPI(id);
    }

  }
  render(){
   //console.log(this.props);
    let list=this.props.userList.playlist||[];
    return (
        <div className="profile-detail-music">
          <div className="route-title">歌单({list.length})</div>
          <ul>
            {list.map((item,index)=>(
                <li key={index}>
                  <NavLink to={"/songList"}>
                    <img src={item.coverImgUrl}/>
                    <div className="music-detail">
                      <h4>{item.name}</h4>
                      {/* <p>累计听歌33433首</p>*/}
                      <p>{item.trackCount}首，播放{item.playCount}次</p>
                    </div>
                  </NavLink>

                </li>
            ))}

            {/*<li>
              <img src={avatar}/>
              <div className="music-detail">
                <h4>听歌排行</h4>
                <p>累计听歌33433首</p>
              </div>
            </li>*/}
          </ul>
        </div>
    )
  }
}