import React from 'react';
import "./index.less";
export default class Profile extends React.Component {
  render(){
    return (
        <div className="profile">
          <container>
            <div className="profile-header">
              <div className="unlogin">
                <p>登录网易云音乐</p>
                <p>320k高音质无线下载，手机电脑多端同步</p>
                <button>立即登录</button>
              </div>
              <div className="logined"></div>
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
                    <h5>个性换肤</h5>
                    <i className="iconfont icon-youjiantou icon-right"></i>
                  </li>
                  <li>
                    <i className="iconfont icon-yejianmoshi icon-left"></i>
                    <h5>夜间模式</h5>
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
          </container>
        </div>
    )
  }
}