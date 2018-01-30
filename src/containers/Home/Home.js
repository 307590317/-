import React from 'react';
import MHeader from "../../components/MHeader/MHeader";
import {getBanner} from "../../api/home";
import {HashRouter as Router, Route, Switch,NavLink} from 'react-router-dom';
import HomeMusic from "./HomeMusic";
import HomeVideo from "./HomeVideo";
import HomeRadio from "./HomeRadio";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import HomeTop from "./HomeTop";
import './index.less';


@connect(state => ({...state}), actions)
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {banner: []};
    }

    async componentDidMount() {
        let banner = await getBanner();
        this.setState({banner});
    }

    render() {
        return (
            <div>
                <MHeader>
                    <i className="iconfont icon-shiwu-maikefeng"></i>
                    <i className="iconfont icon-sousuo sousuo"></i>
                    <input type="text" placeholder="推荐好歌"/>
                </MHeader>

                <div className="home-top">
                    <NavLink to={'/home/music'}>
                        <span>音乐</span>
                    </NavLink>
                    <NavLink to={'/home/video'}>
                        <span>视频</span>
                    </NavLink>
                    <NavLink to={'/home/radio'}>
                        <span>电台</span>
                    </NavLink>
                </div>

                <div className="content">
                        <Route path="/home" exact={true} component={HomeMusic}/>
                        <Route path={'/home/music'} component={HomeMusic}/>
                        <Route path={'/home/video'} component={HomeVideo}/>
                        <Route path={'/home/radio'} component={HomeRadio}/>
                </div>

            </div>
        )
    }
}