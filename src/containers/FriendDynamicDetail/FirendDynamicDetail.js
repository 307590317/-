import React from 'react';
import './index.less';
import a from './img/1.jpg'
import {Link,NavLink} from 'react-router-dom'
import MHeader from '../../components/MHeader/MHeader'
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

            <div className="content">

                <div className="dynamic-detail-each-content">
                    <header className="header">
                        <Link to={'/notice'}>
                            <img src={a} alt=""/>
                        </Link>
                        <div className="next-to-img">
                                  <span className="my-name">
                            小可爱baby
                                </span>
                            <Link to={'/notice'} className="dispatch-audio">
                                发布视频
                            </Link>
                        </div>
                        <p className="lately">昨天：21:09</p>

                        <Link to={'/notice'} className="notice-me">
                            <strong>＋</strong>
                            <strong>关注</strong>
                        </Link>
                    </header>
                    <Link to={'/dynamicdetail'}>
                     <span className="body">
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

                <div className="comment">
                    <span>
                        精彩评论
                    </span>

                </div>

                <div className="each-nearby-user">

                    <div className="nearby-user-profile">
                        <NavLink to={"/friend/nearby/profile"}>
                            <img src={a} alt=""/>
                            <span className="user-name">薛世洋</span>
                            <span className="distance">
                                    <span className="distance-logo">220</span>
                                    <span className="user-distance">👍</span>
                                </span>
                            <span className="sex-and-news-from">
                                     <span className="sex">2月15日</span>
                                </span>

                        </NavLink>
                    </div>

                    <div className="nearby-user-lately-listen-song">
                        <NavLink to={"/song"}>
                            <span className="love-song">我去。这个歌真的太好听了</span>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
  }
}