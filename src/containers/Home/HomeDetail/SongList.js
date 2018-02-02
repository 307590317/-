import React from 'react';
import './song.less';
import {NavLink} from 'react-router-dom';

export default class SongList extends React.Component {
    render() {
        return <div className='songlist'>
            <div className="top">
                <div className="song-title">
                    <NavLink to='/home/music'>
                        <i className='iconfont icon-zuojiantou' ></i>
                    </NavLink>
                    歌单
                    <span>
                  <i className='iconfont icon-101'></i>
                <i className='iconfont icon-paihangbang1'></i>
                </span>

                </div>


                <div className="song-search headerCenter">
                    <input className="search-text" placeholder="搜索歌单歌曲">
                    </input>
                    <i className='iconfont icon-sousuo'></i>
                </div>


                <div className="song-detail">

                    <div className="song-cover">
                        <img src="http://img1.imgtn.bdimg.com/it/u=2916390227,3292952952&fm=11&gp=0.jpg" alt=""/>
                        <span className='song-erji'>
                                  <i className="iconfont icon-headseterji"></i>
                                  <b>1万</b>
                            </span>
                    </div>

                    <div className='song-name'>
                        <p>是的观点是否v时刻提防v路上看到没了不少 return</p>
                        <div className='song-logo'>
                            <img src="http://img1.imgtn.bdimg.com/it/u=2916390227,3292952952&fm=11&gp=0.jpg" alt=""/>
                            <span>请呈的附件是v你</span>
                            <i className='iconfont icon-youjiantou'></i>
                        </div>

                    </div>

                </div>

                <ul className="song-icon4">
                    <li>
                        <a href="#">
                            <i className='iconfont icon-addfile'></i>
                        </a>

                        <span>123</span>
                    </li>

                    <li>
                        <a href="#">
                            <i className='iconfont icon-buoumaotubiao48'></i>
                        </a>

                        <span>123</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='iconfont icon-fenxiang1'></i>
                        </a>

                        <span>123</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='iconfont icon-download'></i>
                        </a>
                        <span>123</span>
                    </li>
                </ul>
            </div>

            <div className="song-play">
                <div className="paly-all">
                    <div className='play-left'>

                        <i className='iconfont icon-bofang2'></i>
                        <span>播放全部<span>(共50首)</span></span>
                    </div>
                    <div className='play-right'>
                        <i className='iconfont icon-liebiao'></i>
                        <span>多选</span>
                    </div>
                </div>

                <ul className='every-song'>
                    <li>
                   <span className='number'>1</span>
                        <div className='songName'>
                            <p >不萌</p>
                            <span>1233</span>
                        </div>
                        <i className='iconfont icon-101'></i>
                    </li>
                </ul>
            </div>

        </div>
    }
}
