import React from 'react';
import {connect} from "react-redux";
import actions from "../../store/actions/reg";
import MHeader from "../../components/MHeader/MHeader";
import "./index.less";

export default class Reg extends React.Component {
  render(){
    return (
        <div className="reg">
          <MHeader>
            <i className='iconfont icon-fanhui'></i>
            <div className='RegCenter'>
              手机号注册
            </div>
          </MHeader>
          <div className="reg-main">
            <div className="util">
              <i className="iconfont icon-msnui-tel"></i>
              <label htmlFor="phone-number"></label>
              <input type="number" id="phone-number" placeholder="+86 请输入手机号"/>
            </div>
            <div className="util">
              <i className="iconfont icon-mima"></i>
              <label htmlFor="password"></label>
              <input type="text" id="password" placeholder="设置登录密码，不少于6位" />
            </div>
            <div className="util next-btn">
              <button>下一步</button>
            </div>
          </div>
          <div className="reg-footer" >
            <div className="otherWay">
              <div className="line-left"></div>
              <div className="text">其他注册方式</div>
              <div className="line-right"></div>
            </div>
            <ul>
              <li>
                <i className="iconfont icon-weixin"></i>
                <p>微信</p>
              </li>
              <li>
                <i className="iconfont icon-qq"></i>
                <p >QQ</p>
              </li>
              <li>
                <i className="iconfont icon-weibo"></i>
                <p>微博</p>
              </li>
              <li>
                <i className="iconfont icon-youxiang"></i>
                <p>网易邮箱</p>
              </li>
            </ul>
          </div>

        </div>
    )
  }
}