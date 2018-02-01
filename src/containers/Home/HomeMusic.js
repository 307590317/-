import React from 'react';
import HomeSwiper from './HomeSwiper';
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import { Route, Switch, NavLink} from 'react-router-dom';
import  SongList from './HomeDetail/SongList';

@connect(state => ({...state.homeReducer}), actions)
export default class HomeMusic extends React.Component {

    componentDidMount() {
        this.props.getBannerAPI();
        this.props.getTuiJiansAPI();
        this.props.getDuJiasAPI();
       this.props. getNewSongAPI();
    }



    render() {

        return <div className='home-music'>

            {/*slider*/}
            <HomeSwiper lists={this.props.banners}/>


            {/*每日排行*/}
            <div className="home-list">
                <ul>
                    <li>
                        <a href="#">
                            <i className="iconfont icon-radio"></i>
                        </a>
                        <span>私人FM</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="iconfont icon-rili"></i>
                        </a>
                        <span>
                        每日推荐
                    </span>

                    </li>
                    <li>
                        <a href="#">
                            <i className="iconfont icon-swticonyinle2"></i>
                        </a>

                        <span>
                       歌单
                    </span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="iconfont icon-PCbofangye_paihangbang"></i>
                        </a>

                        <span>
                        排行榜
                    </span>
                    </li>
                </ul>

            </div>


            {/*推荐歌单*/}
            <div className="music home-recommend">
                <div className="music-title">
                    <i className="iconfont icon-music"></i>
                    <h4>推荐歌单 <i className='iconfont icon-fanhui2'></i></h4>
                </div>
                <ul>
                    {this.props.recommend.result.slice(0,6).map((item,index)=>(
                    <li key={index}>
                        <NavLink to='/songList' >
                            <img src={item.picUrl} alt=""/>
                            <span>
                                  <i className="iconfont icon-headseterji"></i>
                                  <b>{Math.round(item.playCount/10000).toFixed(1)}万</b>
                            </span>
                        </NavLink>
                        <p className="title">
                            {item.name}
                        </p>
                    </li>
                    ))}
                </ul>
            </div>


            {/*独家放送*/}
            <div className="music home-unique">
                <div className="music-title">
                    <i className="iconfont icon-music"></i>
                    <h4>独家放送  <i className='iconfont icon-fanhui2'></i>   </h4>
                </div>
                <ul>
                    {this.props.unique.result.map((item,index)=>(
                    <li key={index}>
                        <a href="">
                            <span>
                                 <i className="iconfont icon-shipinbofangyingpian"></i>
                            </span>
                            <img src={item.picUrl}/>
                        </a>
                        <p>{item.name}</p>
                    </li>
                    ))}
                </ul>
            </div>


            {/*最新音乐*/}
            <div className="music home-new">
                <div className="music-title">
                    <i className="iconfont icon-music"></i>
                    <h4>最新音乐 <i className='iconfont icon-fanhui2'></i></h4>
                </div>
                <ul>
                    {this.props.new.result.slice(0,6).map((item,index)=>(
                        <li key={index}>
                            <a href="">
                                <img src={item.song.album.picUrl} alt=""/>
                            </a>
                            <p>{item.name}</p>
                            <p>{item.song.artists[0].name}</p>
                        </li>
                    ))}


                </ul>
            </div>

            {/*<div className='home-bottom'>*/}

                    {/*<span>调整栏目顺序</span>*/}

                {/*<p>看视频，发现更多有趣内容></p>*/}
            {/*</div>*/}

        </div>
    }
}


