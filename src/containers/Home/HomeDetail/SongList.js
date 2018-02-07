import React from 'react';
import './song.less';
import {getTuiJiansDetail} from '../../../api/zsh';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from "../../../store/actions/common";

@connect(state => ({...state.common}), actions)
export default class SongList extends React.Component {
  constructor() {
    super();
    this.state = {result: {creator: {}, tracks: [{artists: [{}], album: {}}]}};

  }

  async componentDidMount() {
    let id = this.props.location.state.id;
    let result = await getTuiJiansDetail(id);
    this.setState({...result});
  }
  changeMusicId=(e)=>{
    //统一事件源
    let tar=e.target;
    let tarTN=tar.tagName.toLowerCase();
    if(tarTN==='p'){
      tar=tar.parentNode.parentNode;
      tarTN=tar.tagName.toLowerCase();
    }
    if(tarTN==='div'){
      tar=tar.parentNode;
      tarTN=tar.tagName.toLowerCase();
    }
    if(tarTN==='span'){
      if(tar.className==='number'){
        tar=tar.parentNode;
      }
      tar=tar.parentNode.parentNode;
      tarTN=tar.tagName.toLowerCase();
    }
    this.props.getMusicIdAPI(tar.dataset.type);
    this.props.getMusicUrlAPI(tar.dataset.type);
    this.props.changeDetailHide();
  };
  render() {
    let {tracks, name, coverImgUrl, trackCount, commentCount, subscribedCount, shareCount, creator} = this.state.result;
    let {avatarUrl, nickname} = creator;
    return <div className='songlist'>
      <div className="top">
        <div className="song-title">
          <NavLink to='/home/music'>
            <i className='iconfont icon-zuojiantou'></i>
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
            <img src={coverImgUrl}/>
            <span className='song-erji'>
                                  <i className="iconfont icon-headseterji"></i>
                                  <b>1万</b>
                            </span>
          </div>

          <div className='song-name'>
            <p>{name}</p>
            <div className='song-logo'>
              <img src={avatarUrl}/>
              <span>{nickname}</span>
              <i className='iconfont icon-youjiantou'></i>
            </div>

          </div>

        </div>

        <ul className="song-icon4">
          <li>
            <a href="#">
              <i className='iconfont icon-addfile'></i>
            </a>

            <span>{subscribedCount}</span>
          </li>

          <li>
            <a href="#">
              <i className='iconfont icon-buoumaotubiao48'></i>
            </a>

            <span>{commentCount}</span>
          </li>
          <li>
            <a href="#">
              <i className='iconfont icon-fenxiang1'></i>
            </a>

            <span>{shareCount}</span>
          </li>
          <li>
            <a href="#">
              <i className='iconfont icon-download'></i>
            </a>
            <span>下载</span>
          </li>
        </ul>
      </div>

      <div className="song-play">
        <div className="paly-all">
          <div className='play-left'>

            <i className='iconfont icon-bofang2'></i>
            <span>播放全部<span>(共{trackCount}首)</span></span>
          </div>
          <div className='play-right'>
            <i className='iconfont icon-liebiao'></i>
            <span>多选</span>
          </div>
        </div>

        <ul className='every-song' onClick={this.changeMusicId}>
          {tracks.map((item, index) => (
              <li key={index} data-type={item.id}>
                <span className='number'>{index}</span>
                <div className='songName'>
                  <p>{item.name}</p>
                  <span>{item.artists[0].name}-{item.album.name}</span>
                </div>
                <i className='iconfont icon-101'></i>
              </li>
          ))}

        </ul>
      </div>

    </div>
  }
}
