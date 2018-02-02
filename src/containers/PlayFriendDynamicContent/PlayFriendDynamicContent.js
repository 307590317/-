import React, {Component} from 'react';
import './index.less'
import {Link,withRouter} from 'react-router-dom'
import a from './img/1.jpg'
import FriendComment from "../../components/FriendComment/FriendComment";
import LoadMoreThing from "../../components/LoadMoreThing/LoadMoreThing";
import TitelInFriendDynamic from "../../components/TitleInFriendDynamic/TitelInFriendDynamic";
@withRouter
export default class PlayFriendDynamicContent extends Component {
    goBack=()=>{
        this.props.history.push('/friend/dynamic');
    };

    render() {
        return (
            <div className="play-firend-dynamic-content-outer-container">
                {/*播放的内容*/}
                <div className="play-firend-dynamic-content">
                    <img src={a} alt=""/>
                    <i className="gobackbutton iconfont icon-zuojiantou"
                     onClick={this.goBack}
                    ></i>
                </div>


                {/*滚动的区域*/}
                <div className="play-content-and-loadmore-source">
                {/*是滚动区域中可以正常的显示头部的内容，不用这个会出错*/}
                    <div className="content-mask"></div>

                    {/*小编一级播放内容的来源，事事件，播放次数*/}
                    <div className="friend-profile-and-comment-and-more">

                    {/* 小编的头像和名字*/}
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

                    {/* 播放区域的来源或者名字 发布事件和播放的数量*/}
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
                       {/* 下面四个图标字体*/}
                        <div className="about-news-footer">
                            <i className="iconfont icon-zan">123</i>
                            <i className="iconfont icon-tianjia">345</i>
                            <i className="iconfont icon-yduibianxie">345</i>
                            <i className="iconfont icon-fenxiang-tianchong">7894</i>

                        </div>
                    </div>

                    {/*相关推荐的标题*/}
                    <TitelInFriendDynamic>相关推荐</TitelInFriendDynamic>
                    <FriendComment/>
                    <TitelInFriendDynamic>精彩评论</TitelInFriendDynamic>
                    <FriendComment/>
                    <TitelInFriendDynamic>最新评论</TitelInFriendDynamic>
                    <FriendComment/>
                    <TitelInFriendDynamic>    更多推荐
                    </TitelInFriendDynamic>
                   {/* <div className="relative-recommend-title">
                    <span>
                        相关推荐
                    </span>

                    </div>*/}
                    <LoadMoreThing/>
                    {/* 相似的资源
                    <div className="relative-recommend-content">

                        <div className="every-relative-recommend-content">
                            <NavLink  className="every-source-container" to={"/video"}>
                                <img src={a} alt=""/>
                            </NavLink>
                            <NavLink  className="every-title-and-mobile-type-container" to={"/video/1"}>
                               <p className="every-relative-recommend-title">我的尊严被践踏的糊涂，但是还有强颜欢笑，我是可怜的宝宝</p>
                                <p  className="more-about-every-content-time-and-user-phone-type">
                                    <span className="the-time-ofeach-time">00：02</span>
                                    <span className="mobile-type">超级无敌的华为</span>
                                </p>
                            </NavLink>
                        </div>

                    </div>*/}


                </div>



                {/*发表评论区*/}
                <div className="input-comment">
                    <div className="input-content">
                        <input className="write-comment" type="text"/>
                        <i to={"/comment"} className="iconfont icon-xiaoxi1"></i>
                        <i className="iconfont icon-fasong_l"></i>
                    </div>

                </div>

            </div>
        );
    }

}