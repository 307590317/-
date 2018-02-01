import React from 'react';
import './index.less'
import {NavLink} from 'react-router-dom'
export default class Login extends React.Component {
  render(){
    return (
      <div className='login'>
        <div className="container">
          <div className="goback">X</div>
          <div className="login-first">登录</div>
          <div className="logo">
              <img src="" alt=""/>
          </div>
          <div className="btn">
              <div className="login">
                  <NavLink to={'/numlogin'}>
                      手机号登录
                  </NavLink>
              </div>
              <div className="sign">
                  <NavLink to={'/reg'}>
                      注册
                  </NavLink>
              </div>
          </div>
        </div>
      </div>
    )
  }
}