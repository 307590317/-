import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';
import {withRouter} from 'react-router-dom';
@withRouter
export default class Tab extends React.Component {
  render(){
      return (

        <nav className='nav'>
          <NavLink to={'/'} exact={true} className={
              /\/home/.test(this.props.location.pathname)||
              this.props.location.pathname==='/songList'
                  ?'active':''}>
            <i className="iconfont icon-wangyiyunyinyuemusic1193417easyiconnet"></i>
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
          <NavLink to={'/profile'} className={
            /\/profileDetail/.test(this.props.location.pathname)?'active':''
          }>
            <i className="iconfont icon-xiazai"></i>
            <span>个人中心</span>
          </NavLink>
        </nav>
    )
  }
}