import React from 'react';
import './index.less';
export default class MHeader extends React.Component {
  render(){
    return (
        <div className='header'>
          {this.props.children}
          <i className="iconfont icon-paihangbang1"></i>
        </div>
    )
  }
}