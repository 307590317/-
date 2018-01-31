import React from 'react';
import HomeSwiper from './HomeSwiper';
import {connect} from 'react-redux';
import actions from '../../store/actions/home';

@connect(state => ({...state.homeReducer}), actions)
export default class HomeMusic extends React.Component {


    render() {

        return <div className='home-music'>

            {/*slider*/}
            <HomeSwiper lists={this.props.banners}/>

            <div className="home-list">
                <ul>
                    <li>
                        <a href="#">
                            <i className="iconfont icon-music"></i>
                        </a>
                        <span>私人FM</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="iconfont icon-yaoqinghaoyou"></i>
                        </a>
                        <span>
                        每日推荐
                    </span>

                    </li>
                    <li>
                        <a href="#">
                            <i className="iconfont icon-yinyue"></i>
                        </a>

                        <span>
                       歌单
                    </span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="iconfont icon-xiazai"></i>
                        </a>

                        <span>
                        排行榜
                    </span>
                    </li>
                </ul>

            </div>

            <div className="home-recommend">
                <div className="list">
                    <i className="iconfont icon-music"></i>
                    <h4>推荐歌单></h4>
                </div>
                <ul>
                    <li>
                        <a>
                            <img src="http://p1.music.126.net/bCGtIIW-f0Ofr_ABRGRLiw==/109951163118947933.jpg?param=140y140" alt=""/>
                            <span>
                                  <i></i>
                             conmment
                            </span>
                        </a>
                        <p className="title">
                            华语新歌
                        </p>
                    </li>
                    <li>
                        <a>
                            <img src="http://p1.music.126.net/bCGtIIW-f0Ofr_ABRGRLiw==/109951163118947933.jpg?param=140y140" alt=""/>
                            <span>
                                  <i></i>
                             conmment
                            </span>
                        </a>
                        <p className="title">
                            华语新歌
                        </p>
                    </li>
                    <li>
                        <a>
                            <img src="http://p1.music.126.net/bCGtIIW-f0Ofr_ABRGRLiw==/109951163118947933.jpg?param=140y140" alt=""/>
                            <span>
                                  <i></i>
                             conmment
                            </span>
                        </a>
                        <p className="title">
                            华语新歌
                        </p>
                    </li>
                    <li>
                        <a>
                            <img src="http://p1.music.126.net/bCGtIIW-f0Ofr_ABRGRLiw==/109951163118947933.jpg?param=140y140" alt=""/>
                            <span>
                                  <i></i>
                             conmment
                            </span>
                        </a>
                        <p className="title">
                            华语新歌
                        </p>
                    </li>
                    <li>
                        <a>
                            <img src="http://p1.music.126.net/bCGtIIW-f0Ofr_ABRGRLiw==/109951163118947933.jpg?param=140y140" alt=""/>
                            <span>
                                  <i></i>
                             conmment
                            </span>
                        </a>
                        <p className="title">
                            华语新歌华语新歌华语新歌华语新歌
                        </p>
                    </li>
                </ul>
            </div>

            <div className="home-unique">
                <div className="list">
                    <i className="iconfont icon-music"></i>
                    <h4>独家放送></h4>
                </div>
                <ul>
                    <li>
                    <a href="">
                        <i className="iconfont icon-music"></i>
                        <img src="http://p4.music.126.net/DjKpNXFBukZBYIfJJ9KGMQ==/18753270325541976.jpg?param=200y200" alt=""/>
                    </a>
                        <p>在无聊的有氧运动中寻找你的节奏</p>
                </li>
                    <li>
                        <a href="">
                            <i className="iconfont icon-music"></i>
                            <img src="http://p4.music.126.net/DjKpNXFBukZBYIfJJ9KGMQ==/18753270325541976.jpg?param=200y200" alt=""/>
                        </a>
                        <p>在无聊的有氧运动中寻找你的节奏</p>
                    </li>
                    <li>
                        <a href="">
                            <i className="iconfont icon-music"></i>
                            <img src="http://p4.music.126.net/DjKpNXFBukZBYIfJJ9KGMQ==/18753270325541976.jpg?param=200y200" alt=""/>
                        </a>
                        <p>在无聊的有氧运动中寻找你的节奏</p>
                    </li>
                </ul>
            </div>

            <div className="home-new">
                <div className="list">
                    <i className="iconfont icon-music"></i>
                    <h4>独家放送></h4>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <img src="http://p4.music.126.net/DjKpNXFBukZBYIfJJ9KGMQ==/18753270325541976.jpg?param=200y200" alt=""/>
                        </a>
                        <p>在无聊的有氧运动中寻找你的节奏</p>
                    </li>
                    <li>
                        <a href="">
                            <img src="http://p4.music.126.net/DjKpNXFBukZBYIfJJ9KGMQ==/18753270325541976.jpg?param=200y200" alt=""/>
                        </a>
                        <p>在无聊的有氧运动中寻找你的节奏</p>
                    </li>
                    <li>
                        <a href="">
                            <img src="http://p4.music.126.net/DjKpNXFBukZBYIfJJ9KGMQ==/18753270325541976.jpg?param=200y200" alt=""/>
                        </a>
                        <p>在无聊的有氧运动中寻找你的节奏</p>
                    </li>
                </ul>
            </div>

        </div>
    }
}
