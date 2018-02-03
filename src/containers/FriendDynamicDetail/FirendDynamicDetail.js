import React from 'react';
import './index.less';
import a from './img/1.jpg'
import {Link,NavLink} from 'react-router-dom'
import MHeader from '../../components/MHeader/MHeader'
import FriendComment from "../../components/FriendComment/FriendComment";
import TitelInFriendDynamic from "../../components/TitleInFriendDynamic/TitelInFriendDynamic";
export default class FriendDynamicDetail extends React.Component {
  render(){
    return (
        <div className='friend'>
            <MHeader>
                <i className="iconfont icon-tianjiahaoyou"></i>
                <div className='friendCenter'>
                    <div className='change'>
                        <NavLink to={'/friend/dynamic'}
                                 className={this.props.location.pathname === '/friend/dynamic' || this.props.location.pathname === '/friend' ? 'select' : ''}>动态</NavLink>
                        <NavLink to={'/friend/nearby'}
                                 className={this.props.location.pathname === '/friend/nearby' ? 'select' : ''}>附近</NavLink>
                    </div>
                </div>
            </MHeader>
            <TitelInFriendDynamic>精彩评论</TitelInFriendDynamic>
            <FriendComment/>
            <TitelInFriendDynamic>相关评论</TitelInFriendDynamic>
            <FriendComment/>
            <div className="content">

                <div className="dynamic-detail-each-content">
                    <header className="friend-dynamic-detail-header">
                        <Link  className="photo-container-in-friend-dynamic" to={'/home'}>
                            <img src={a} alt=""/>
                        </Link>

                        <div className="username-in-friend-dynamic">
                                  <Link to={"/profile"} >
                            小可爱baby
                                </Link>
                            <Link to={'/reg'}>
                                发布视频
                            </Link>
                        </div>

                        <p className="watchtime-in-friend-dynamic">昨天：21:09</p>

                        <Link to={'/login'} className="notice-me">
                            <strong>＋</strong>
                            <strong>关注</strong>
                        </Link>
                    </header>
                    <Link to={'/dynamicdetail'}>
                     <span className="friend-dynamic-detail-conment">
                    <strong>我的是乐坛歌王，来挑战我吧我的是乐坛歌王，来挑战我吧我的是乐坛歌王，来挑战我吧我的是乐坛歌王，来挑战我吧</strong>
                    <img src={a} alt=""/>
                </span>
                    </Link>

                <div className="praise-container">
                    <span className="who-is-praise">
                        <a  className="praise" href="javascript:;">赞:</a>
                        <Link to={"/profile"}><img src={a} alt=""/></Link>
                        <Link to={"/profile"}><img src={a} alt=""/></Link>
                        <Link to={"/profile"}><img src={a} alt=""/></Link>
                    </span>
                </div>
                </div>
                <TitelInFriendDynamic>精彩评论</TitelInFriendDynamic>
                <FriendComment/>
                <TitelInFriendDynamic>最新评论</TitelInFriendDynamic>
                <FriendComment/>

            </div>
        </div>
    )
  }
}