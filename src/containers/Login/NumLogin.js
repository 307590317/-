import React from 'react';
import "./index.less";
import MHeader from "../../components/MHeader/MHeader";
export default class NumLogin extends React.Component {
  render(){
    return (
        <div className="number-login">
          <MHeader>
            <i className='iconfont'>&#xe6b7;</i>
            <div className='numberLoginCenter'>
              手机号登录
            </div>
          </MHeader>
          <div className="number-login-main">
            <div className="util">
              <i className="iconfont">&#xe693;</i>
              <label htmlFor="phone-number"></label>
              <input type="number" id="phone-number" placeholder="手机号" />
            </div>
            <div className="util">
              <i className="iconfont">&#xe603;</i>
              <label htmlFor="password"></label>
              <input type="text" id="password" placeholder="密码" />
            </div>
            <div className="util login-btn">
              <button>登录</button>
              <a className="reset">重设密码</a>
            </div>
          </div>

        </div>
    )
  }
}