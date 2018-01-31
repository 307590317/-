import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';
export default class Tab extends React.Component {
  render(){
    return (
        <nav className='nav'>
          <NavLink to={'/'}>
            <i className="iconfont icon-music"></i>
            <span>发现音乐</span>
          </NavLink>
          <NavLink to={'/mymusic'}>
            <i className="iconfont icon-yinyue"></i>
            <span>我的音乐</span>
          </NavLink>
          <NavLink to={'/friend'}>
            <i className="iconfont icon-yaoqinghaoyou"></i>
            <span>朋友</span>
          </NavLink>
          <NavLink to={'/profile'}>
            <i className="iconfont icon-xiazai"></i>
            <span>个人中心</span>
          </NavLink>
        </nav>
    )
  }
}