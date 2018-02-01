import React from 'react';
import './index.less';
import {Link} from 'react-router-dom';
export default class MHeader extends React.Component {
  static defaultProps={
    show:true
  };
  render(){
    return (
        <div className='header'>
          {this.props.children}
              <Link to={{pathname:'/detail/1'}} className={this.props.show?'show':''}>
                <i className="iconfont icon-paihangbang1"></i>
              </Link>
        </div>
    )
  }
}