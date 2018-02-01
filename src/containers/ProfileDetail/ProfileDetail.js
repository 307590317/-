import React from 'react';
import {NavLink,Route,Switch} from "react-router-dom";
import {connect} from "react-redux";

import MHeader from "../../components/MHeader/MHeader";
import "./index.less";
let background=require("./images/bg.jpg");
import avatar from "./images/avator.png";
import Dynamic from "./Dynamic";
import AboutMe from "./AboutMe";
import Music from "./Music";

@connect(state=>({...state.loginReducer,...state.profileReducer}))
export default class ProfileDetail extends React.Component {
  render(){
    let style={
      backgroundImage:`url(${background})`,
      backgroundSize:"100% 100%"
    };
    console.log(this.props);
    let userProfile=this.props.userInfo||{};
    let {nickname,avatarUrl,follows,followeds,eventCount,gender,playlistCount}=userProfile.profile||{};
    return (
        <div className="profile-detail">
          <div className="Essential" style={style}>
            <MHeader>
              <i className='iconfont icon-fanhui' onClick={()=>{this.props.history.goBack()}}></i>
              <div className="headerCenter">
              </div>
              <i className="iconfont icon-fenxiang1"></i>

            </MHeader>
            <div className="Basics-info">
              <img src={avatarUrl} />
              <div className="text-info">
                <h5>
                  {nickname}
                  {gender==0?<i className="iconfont icon-nv pink"></i>:<i className="iconfont icon-nan"></i>}

                </h5>
                <p>
                  <span>关注&nbsp;{follows}</span>|<span>粉丝&nbsp;{followeds}</span>
                </p>
                <button><i className="iconfont icon-qiandao"></i>编辑</button>
              </div>
            </div>
          </div>
          <div className="detail-info">
            <ul className="nav-level2">
              <li>
                <NavLink to={"/profileDetail/music"} className={this.props.location.pathname==='/profileDetail'?'active':''}>
                  <span>音乐</span>
                  <span className="number">{playlistCount}</span>
                </NavLink>

              </li>
              <li>
                <NavLink to={"/profileDetail/dynamic"}>
                  <span>动态</span>
                  <span className="number">{eventCount}</span>
                </NavLink>

              </li>
              <li>
                <NavLink to={"/profileDetail/aboutMe"}>
                  <span>关于我</span>
                  {/*<span className="number">3</span>*/}
                </NavLink>

              </li>
            </ul>
            <div>
              <Switch>
                <Route path={"/profileDetail"} exact={true} component={Music}/>
                <Route path={"/profileDetail/aboutMe"} component={AboutMe}/>
                <Route path={"/profileDetail/music"} component={Music}/>
                <Route path={"/profileDetail/dynamic"} component={Dynamic}/>
              </Switch>

            </div>
          </div>
        </div>
    )
  }
}