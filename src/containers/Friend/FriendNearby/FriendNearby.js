import React from 'react';
import './index.less'
import {NavLink} from 'react-router-dom'
import a from "./img/1.jpg"

export default class FriendNearby extends React.Component {
    render() {
        return (
            <div>
                <div className="nearby">

                    <div className="nearby-logo">
                        <NavLink className="img-content" to={"/xxx"}>
                            <img src={a} alt=""/>
                        </NavLink>
                        <NavLink className="title-content" to={"/xxx"}>
                            <span>我的是乐坛歌王，来挑战我吧我的是乐坛歌王，来挑战我吧我的是乐坛歌王，来挑战我吧我的是乐坛歌王，来挑战我吧</span>
                        </NavLink>
                        <NavLink className="location-content" to={"/xxx"}>

                            <i className="iconfont icon-music"></i>
                            <span className="show-logo">网易云音乐</span>
                            <span className="show-distance">110km</span>
                        </NavLink>
                    </div>

                    <div className="each-nearby-user">

                        <div className="nearby-user-profile">
                            <NavLink to={"/friend/nearby/profile"}>
                                <img src={a} alt=""/>
                                <span className="user-name">薛世洋</span>
                                <span className="distance">
                                    <span className="distance-logo">&</span>
                                    <span className="user-distance">0.5km</span>
                                </span>
                                <span className="sex-and-news-from">
                                     <i className="sex">♂</i>
                                 <img src={a} alt=""/>
                                </span>

                            </NavLink>
                        </div>

                        <div className="nearby-user-lately-listen-song">
                            <NavLink to={"/song"}>
                                <span className="love-song">最近听：我爱你祖国</span>
                                <span className="time">1月28日</span>
                            </NavLink>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}