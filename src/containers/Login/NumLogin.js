import React from 'react';
import "./index.less";
import MHeader from "../../components/MHeader/MHeader";
import {connect} from "react-redux";
import actions from "../../store/actions/common";

@connect(state=>({...state.common}),actions)
export default class NumLogin extends React.Component {
  loginNow=()=>{
    let number=this.phoneNumber.value;
    let password=this.password.value;
    this.props.getUserIdAPI(number,password,this.props.history);
    this.phoneNumber.value='';
    this.password.value='';
  };
  render(){
    return (
        <div>
          <MHeader show={false}>
            <i className='iconfont icon-fanhui' onClick={()=>{this.props.history.goBack()}}></i>
            <div className='headerCenter'>
              手机号登录
            </div>
          </MHeader>

          <div className="number-login">
            <div className="number-login-main">
              <div className="util">
                <i className="iconfont icon-msnui-tel"></i>
                <label htmlFor="phone-number"></label>

                <input type="text" id="phone-number" maxLength="11" placeholder="手机号" ref={(x)=>{this.phoneNumber=x}} />
              </div>

              <div className="util">
                <i className="iconfont icon-mima"></i>
                <label htmlFor="password"></label>
                <input type="password" id="password" placeholder="密码" maxLength="16" ref={(x)=>{this.password=x}}  />
              </div>
              <div className="util login-btn">
                <button onClick={this.loginNow}>登录</button>
                <a className="reset">重设密码</a>
              </div>
            </div>

          </div>
        </div>

    )
  }
}