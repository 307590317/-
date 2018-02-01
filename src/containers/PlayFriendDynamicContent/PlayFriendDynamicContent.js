import React, {Component} from 'react';
import './index.less'
import {NavLink, Link} from 'react-router-dom'
import a from './img/1.jpg'

export default class PlayFriendDynamicContent extends Component {
    render() {
        return (
            <div>
                <div className="play-content-and-loadmore-source">

                    {/*播放的内容*/}
                    <div className="play-firend-dynamic-content">
                        <img src={a} alt=""/>
                    </div>

                    {/*小编一级播放内容的来源，事事件，播放次数*/}
                    <div className="friend-profile-and-comment-and-more">

                     {/*小编的头像和名字*/}
                        <header className="friend-dynamic-user-profile-header">


                            <Link className="userimg-in-play-content" to={'/notice'}>
                                <img src={a} alt=""/>
                            </Link>


                            <Link  className="username-in-play-content" to={"/xxxxx"}>
                                 <span className="my-name">
                            小可爱baby
                                </span>
                            </Link>


                            <Link to={'/notice'} className="notice-me">
                                <strong>＋</strong>
                                <strong>关注</strong>
                            </Link>

                        </header>

                     {/*播放区域的来源或者名字*/}

                        {/*发布事件和播放的数量*/}
                        <div className="news-source">
                    <span className="news-time">
                        <span>发布:2018-01-31</span>
                        <span>播放:2018-01-31</span>
                    </span>
                        </div>

                        {/*播放内容的类型*/}
                        <div className="news-type-container">

                            <span>影视</span>
                            <span>电视剧</span>

                        </div>



                        {/*下面四个图标字体*/}
                        <div className="about-news-footer">
                            <i className="iconfont icon-tianjiahaoyou"></i>
                            <i className="iconfont icon-tianjiahaoyou"></i>
                            <i className="iconfont icon-tianjiahaoyou"></i>
                            <i className="iconfont icon-tianjiahaoyou"></i>
                        </div>

                    </div>

                    {/*更多推荐*/}
                    <div className="relative-guesste">
                    <span>
                        精彩评论
                    </span>

                    </div>


                    {/*相似的资源*/}
                    <div className="each-nearby-user">

                        <div className="nearby-user-profile">
                            <NavLink to={"/friend/nearby/profile"}>
                                <audio src={a} alt=""/>
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

                    {/*发表评论区*/}
                    <div className="input-comment">
                        <div className="input-content">
                            <input className="write-comment" type="text"/>
                            <Link to={"/comment"} className="iconfont">评论</Link>
                        </div>

                    </div>
                </div>


            </div>
        );
    }

}