import React from 'react';
import './index.less';
import {NavLink} from 'react-router-dom';
export default class MHeader extends React.Component {
  static defaultProps={
    show:true
  };
  render(){
      return (
        <div className='header'>
          {this.props.children}
              <NavLink to={{pathname:'/detail/33894312'}} style={{display:this.props.display}}>
                <i className="iconfont icon-paihangbang1"></i>
              </NavLink>
        </div>
    )
  }
}