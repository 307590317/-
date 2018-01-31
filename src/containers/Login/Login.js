import React from 'react';
import {Route,NavLink} from 'react-router-dom';
export default class Login extends React.Component {
  render(){
    return (
        <div>
          <NavLink to={'/numlogin'}>
            点击进入手机号登录
          </NavLink>
        </div>
    )
  }
}