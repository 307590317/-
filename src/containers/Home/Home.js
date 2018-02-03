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
import 'babel-polyfill';
import {search} from '../../api/zsh';
import './index.less';
import HomeSearch from "./HomeSearch";

@connect(state => ({...state}), actions)
export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      val: '', display: 'none', flag: false,
      lists: {result: {songs: [{name: '', artists: [{}]}]}}
    }
  }

  songSearch = async (e) => {
    if (e.keyCode === 13) {
      let val = e.target.value.trim();
      let result = await search(val);
      this.setState({...this.state, flag: true, lists: {...result}});
      console.log(this.state);
    }

  };

  displayMask = () => {
    this.setState({...this.state, display: 'block'});
  };

  render() {
    let {display} = this.state;
    let {songs} = this.state.lists.result;
    return (
      <div className='home'>

        <MHeader display={display == 'block' ? 'none' : 'block'}>
          {/*如果弹出层出现，胡同消失*/}
          <i className="iconfont icon-shiwu-maikefeng" style={{display: display == 'block' ? 'none' : 'flex'}}></i>
          <div className='headerCenter' style={{width: display == 'block' ? '300px' : void 0}}>
            <i className="iconfont icon-sousuo"></i>

            <input type="text" placeholder="推荐好歌" onKeyUp={this.songSearch} onFocus={this.displayMask}
                   ref={x => this.x = x}/>

          </div>

          <span className='cancel' style={{display: display == 'block' ? 'block' : 'none'}} onClick={() => {
            this.setState({...this.state, display: 'none'})
            this.x.value = '';
          }}>取消</span>

        </MHeader>

        <div className='content'>

          <div className="home-search" style={{display}}>
            <ul className='enterSongs' style={{display: this.state.flag ? 'block' : 'none'}}>
              {songs ? songs.map((item, index) => (
                <NavLink to={`/detail/${item.id}`} key={index}>
                  <li>
                    <div className="songName">
                      <h5>{item.name}</h5>
                      <p>{item.artists[0].name}</p>
                    </div>

                    <i className='iconfont icon-101'></i>
                  </li>
                </NavLink>

              )) : null}

            </ul>
          </div>


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

