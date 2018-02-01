import React from 'react';
import {Link} from 'react-router-dom';

import MHeader from "../../../components/MHeader/MHeader";
import './LatestPlay.less'

export default class LatestPlay extends React.Component {

  constructor(){
    super();
    this.state={isArise:false}

  }

  clickDelete=()=>{
     this.setState({isArise:!this.state.isArise});
  };

  render() {
    return (
      <div>
        <MHeader>
          <i className="iconfont icon-fanhui"></i>
          <div className='headerCenter'>
            最近播放的歌曲
          </div>
        </MHeader>

        <div className="content">

          <div className='alone'>
            <Link to={'/'}>
              <i className='first iconfont icon-bofang11'></i>
              <span>播放全部</span>
              <span>（共3首）</span>

              <div className='multiple-choice'>
                <i className='iconfont icon-liebiao'></i>
                <span>多选</span>
              </div>
            </Link>
          </div>

          <ul className='songs'>
            <li>
              <Link to={'/'}>
              <div className='song-name'>
                <p>彩虹</p>
                <span>周杰伦 - 主打</span>
              </div>
                <i className=' iconfont icon-more'></i>
              </Link>
            </li>

            <li>
              <Link to={'/'}>
              <div className='song-name'>
                <p>彩虹</p>
                <span>周杰伦 - 主打</span>
              </div>
                <i className=' iconfont icon-more'></i>
              </Link>
            </li>

            <li className='rubbish' onClick={this.clickDelete}>
              <span><i className='iconfont icon-dustbin_icon'></i>清除播放记录</span>
              {!this.state.isArise?<div className='layer-delete'>
                <div className='clear-list'>
                  <p>确定清除播放记录</p>
                  <button className='clear-away'>清除</button>
                </div>

                <button className='call-off'>取消</button>
              </div>:null}
            </li>
          </ul>


        </div>
      </div>
    )
  }
}

