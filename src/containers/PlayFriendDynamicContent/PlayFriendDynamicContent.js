import React, {Component} from 'react';
import './index.less'
import {NavLink, Link} from 'react-router-dom'
import a from './img/1.jpg'

export default class PlayFriendDynamicContent extends Component {
    render() {
        return (
            <div>
                <div className="play-content-and-loadmore-source">
                    <div className="play-firend-dynamic-contentt">
                        <img src={a} alt=""/>
                    </div>

                    <div className="friend-profile-and-comment-and-more">
                        <header className="header">
                            <Link to={'/notice'}>
                                <img src={a} alt=""/>
                            </Link>


                            <Link to={"/xxxxx"}>
                                 <span className="my-name">
                            小可爱baby
                                </span>
                            </Link>


                            <Link to={'/notice'} className="notice-me">
                                <strong>＋</strong>
                                <strong>关注</strong>
                            </Link>
                        </header>

                        <Link to={'/dynamicdetail'}>
                     <span className="body">
                    <strong>《电视剧恋爱先生》：我的是乐坛歌王</strong>
                </span>
                        </Link>

                        <div className="praise-container">
                    <span className="who-is-praise">
                        <a className="praise" href="javascript:;">赞:</a>
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

                    <div className="input-comment">
                        <input type="text"/>
                    </div>
                </div>


            </div>
        );
    }

}