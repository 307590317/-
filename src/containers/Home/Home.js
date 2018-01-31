import React from 'react';
import MHeader from "../../components/MHeader/MHeader";
import './index.less';
import {getBanner} from "../../api/home";
import {HashRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import HomeMusic from "./HomeMusic";
import HomeVideo from "./HomeVideo";
import HomeRadio from "./HomeRadio";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import HomeTop from "./HomeTop";
import './index.less';

@connect(state => ({...state.homeReducer}), actions)
export default class Home extends React.Component {


    componentWillMount() {
        this.props.getBannerAPI();
        this.props.getTuiJiansAPI();
    }

    render() {
        console.log(this.props);
        return (
            <div className='home'>
                <MHeader>
                    <i className="iconfont icon-shiwu-maikefeng"></i>
                    <div className='headerCenter'>
                        <i className="iconfont icon-sousuo"></i>
                        <input type="text" placeholder="推荐好歌"/>
                    </div>
                </MHeader>
                <div className='content'>
                    <HomeTop/>
                    <div className="router">
                        <Switch>
                            <Route path={'/'}  exact={true}  component={HomeMusic}/>
                            <Route path={'/home/music'} component={HomeMusic}/>
                            <Route path={'/home/video'} component={HomeVideo}/>
                            <Route path={'/home/radio'} component={HomeRadio}/>
                        </Switch>
                    </div>
                </div>

            </div>
        )
    }
}