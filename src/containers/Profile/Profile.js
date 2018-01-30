import React from 'react';
import MHeader from "../../components/MHeader/MHeader";
import "./index.less";
import {NavLink} from 'react-router-dom';
import Login from "../Login/Login";

export default class Profile extends React.Component {
  toLogin=()=>{
    this.props.history.push('/login')
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
              <div className="unlogin" style={{display:"block"}}>
                <p>登录网易云音乐</p>
                <p>320k高音质无线下载，手机电脑多端同步</p>
                <button onClick={this.toLogin}>立即登录</button>
              </div>
              {/*登录后的头部*/}
              <div className="logined" style={{display:'none'}}>
                <div className="Basic-info">
                  <img src=""/>
                  <div className="info-text">
                    <p className="name">机智的半夏</p>
                    <span className="grade">Lv.7</span>
                  </div>
                  <span className="sign"><i className="iconfont icon-jinbi"></i>签到</span>

                </div>
                <ul>
                  <li>
                    <p>动态</p>
                    <p className="num">1</p>
                  </li>
                  <li>
                    <p>关注</p>
                    <p className="num">1</p>
                  </li>
                  <li>
                    <p>粉丝</p>
                    <p className="num">1</p>
                  </li>
                  <li>
                    <i className="iconfont icon-qiandao"></i>
                    <p>我的资料</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile-main">


              <div className="util">
                <li>
                  <i className="iconfont icon-xiaoxi icon-left"></i>
                  <h5>我的消息</h5>
                  <i className="iconfont icon-youjiantou icon-right"></i>
                </li>
              </div>
              <div className="util">
                <ul>
                  <li>
                    <i className="iconfont icon-vip icon-left"></i>
                    <h5>vip会员</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-gouwuche icon-left"></i>
                    <h5>商城</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-liuliang icon-left"></i>
                    <h5>在线听歌免流量</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                </ul>
              </div>
              <div className="util">
                <ul>
                  <li>
                    <i className="iconfont icon-shezhi icon-left"></i>
                    <h5>设置</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-saoyisao icon-left"></i>
                    <h5>扫一扫</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-yifuhuanfu icon-left"></i>
                    <span className="color-name">官方红</span>
                    <h5>个性换肤</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-yejianmoshi icon-left"></i>
                    <h5>夜间模式</h5>
                    <input type="checkbox" className="switch"/>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-dingshiguanbi icon-left"></i>
                    <h5>定时关闭</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-icon-test icon-left"></i>
                    <h5>音乐闹钟</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-cheliang icon-left"></i>
                    <h5>驾驶模式</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>

                  </li>
                </ul>
              </div>
              <div className="util">
                <ul>
                  <li>
                    <i className="iconfont icon-fenxiang icon-left"></i>
                    <h5>分享网易云音乐</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-iconset0142 icon-left"></i>
                    <h5>关于</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="exit">
              退出登录
            </div>
          </div>
        </div>
    )
  }
}
