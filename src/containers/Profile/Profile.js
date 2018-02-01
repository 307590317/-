import React from 'react';
import MHeader from "../../components/MHeader/MHeader";
import "./index.less";
import {NavLink} from 'react-router-dom';
import Login from "../Login/Login";

export default class Profile extends React.Component {
  toLogin=()=>{
    this.props.history.push('/login')
  };
  toProfileDetail=(e)=>{
    this.props.history.push("/profileDetail");
  };
  sign=(e)=>{
    e.stopPropagation();
  };
  render() {
    return (
        <div className="profile">
          <MHeader>
            <i className='empty'></i>
            <div className='ProfileCenter'>
              账号
            </div>
          </MHeader>
          <div className="content">
            <div className="profile-header">
              {/*登录前的头部*/}
              <div className="unlogin" style={{display:"none"}}>
                <p>登录网易云音乐</p>
                <p>320k高音质无线下载，手机电脑多端同步</p>
                <button onClick={this.toLogin}>立即登录</button>
              </div>
              {/*登录后的头部*/}
              <div className="logined" style={{display:'block'}}>
                <div className="Basic-info" onClick={(e)=>{this.toProfileDetail(e)}}>
                  <img src="" />
                  <div className="info-text">
                    <p className="name">机智的半夏</p>
                    <span className="grade">Lv.7</span>
                  </div>
                  <span className="sign" onClick={(e)=>{this.sign(e)}}><i className="iconfont icon-jinbi"></i>签到</span>

                </div>
                <ul>
                  <li>
                    <p><NavLink to={""}>动态</NavLink></p>
                    <p className="num">1</p>
                  </li>
                  <li>
                    <p><NavLink to={""}>关注</NavLink></p>
                    <p className="num">1</p>
                  </li>
                  <li>
                    <p><NavLink to={""}>粉丝</NavLink></p>
                    <p className="num">1</p>
                  </li>
                  <li>
                    <i className="iconfont">&#xe61c;</i>
                    <p><NavLink to={""}>我的资料</NavLink></p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile-main">


              <div className="util">
                <li>
                  <i className="iconfont icon-xiaoxi icon-left"></i>
                  <h5><NavLink to={""}>我的消息</NavLink></h5>
                  <i className="iconfont icon-right icon-youjiantou"></i>
                </li>
              </div>
              <div className="util">
                <ul>
                  <li>
                    <i className="iconfont icon-left icon-vip"></i>
                    <h5><NavLink to={""}>vip会员</NavLink></h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-left icon-gouwuche"></i>
                    <h5><NavLink to={""}>商城</NavLink></h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-left icon-liuliang"></i>
                    <h5><NavLink to={""}>在线听歌免流量</NavLink></h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                </ul>
              </div>
              <div className="util">
                <ul>
                  <li>
                    <i className="iconfont icon-left icon-shezhi"></i>
                    <h5><NavLink to={""}>设置</NavLink></h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-left icon-saoyisao"></i>
                    <h5><NavLink to={""}>扫一扫</NavLink></h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-left icon-yifuhuanfu"></i>
                    <span className="color-name">官方红</span>
                    <h5><NavLink to={""}>个性换肤</NavLink></h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-left icon-yejianmoshi"></i>
                    <h5>夜间模式</h5>
                    <input type="checkbox" className="switch"/>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-left icon-dingshiguanbi"></i>
                    <h5>定时关闭</h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-left icon-icon-test"></i>
                    <h5><NavLink to={""}>音乐闹钟</NavLink></h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-left icon-cheliang"></i>
                    <h5><NavLink to={""}>驾驶模式</NavLink></h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>

                  </li>
                </ul>
              </div>
              <div className="util">
                <ul>
                  <li>
                    <i className="iconfont icon-left icon-fenxiang"></i>
                    <h5><NavLink to={""}>分享网易云音乐</NavLink></h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-left icon-iconset0142"></i>
                    <h5><NavLink to={""}>关于</NavLink></h5>
                    <i className="iconfont icon-right icon-youjiantou"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="exit">
              <NavLink to={""}>退出登录</NavLink>
            </div>
          </div>
        </div>
    )
  }
}
