import React from 'react';
import './index.less';
import {Link} from 'react-router-dom';
export default class MHeader extends React.Component {
  render(){
    return (
        <div className='header'>
          {this.props.children}
            <Link to={{pathname:'/detail/1'}}
              className="iconfont icon-paihangbang1"
                     tag='span'
            >
            </Link>
        </div>
    )
  }
}