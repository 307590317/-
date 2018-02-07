import React from 'react';
import './index.less';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from "../../store/actions/common";
@connect(state=>({...state.common}),actions)
export default class MHeader extends React.Component {
  static defaultProps={
    show:true
  };
  render(){
    return (
        <div className='header'>
          {this.props.children}
                <i className="iconfont icon-paihangbang1" style={{display:this.props.display}} onClick={this.props.changeDetailHide}></i>
        </div>
    )
  }
}