import React from 'react';
import MHeader from "../../components/MHeader/MHeader";
import './index.less';
import {Route, Switch, NavLink} from 'react-router-dom';
import HomeMusic from "./HomeMusic";
import HomeVideo from "./HomeVideo";
import HomeRadio from "./HomeRadio";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import HomeTop from "./HomeTop";
import './index.less';

@connect(state => ({...state}), actions)
export default class Home extends React.Component {
  songSearch = (e) => {
    if (e.keyCode === 13) {
      let val = e.target.value.trim();
    }
  };

  render() {
    return (
      <div className='home'>
        <MHeader>
          <i className="iconfont icon-shiwu-maikefeng"></i>
          <div className='headerCenter'>
            <i className="iconfont icon-sousuo"></i>
            <input type="text" placeholder="推荐好歌" onKeyUp={this.songSearch}/>
          </div>
        </MHeader>

        <div className='content'>

          {/*HomeTop*/}
          <div className='home-top'>
            <NavLink to={'/home/music'} className={this.props.location.pathname === '/' ? 'active' : ''}>
              <span>音乐</span>
            </NavLink>
            <NavLink to={'/home/video'}>
              <span>视频</span>
            </NavLink>
            <NavLink to={'/home/radio'}>
              <span>电台</span>
            </NavLink>
          </div>


          {/*<HomeTop/>*/}

          <div className="router">
            <Switch>
              <Route path={'/'} exact={true} component={HomeMusic}/>
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
