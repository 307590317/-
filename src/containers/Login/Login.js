import React from 'react';
import './index.less'
import {NavLink} from 'react-router-dom'
import logo from "./img/musicLogo.jpg";
export default class Login extends React.Component {
  render(){
    return (
      <div className='login'>
        <i className="iconfont icon-fanhui goBack" onClick={()=>{this.props.history.goBack()}}></i>
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <div className="btn-box">
            <div className="btn login-btn">
                <NavLink to={'/numlogin'}>
                    手机号登录
                </NavLink>
            </div>
            <div className="btn sign-btn">
                <NavLink to={'/reg'}>
                    注册
                </NavLink>
            </div>
            <div className="Tourist">
              <NavLink to={'/'}>
                游客试用
              </NavLink>
            </div>
        </div>
      </div>
    )
  }
}