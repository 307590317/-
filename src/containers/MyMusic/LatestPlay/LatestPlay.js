import React from 'react';
import {Link,NavLink} from 'react-router-dom';

import MHeader from "../../../components/MHeader/MHeader";
import './LatestPlay.less'

export default class LatestPlay extends React.Component {

  constructor(){
    super();
    this.state={
      isArise:false,
      isTurn:false,
      isCheck:false
    }

  }

  clickDelete=()=>{
     this.setState({isArise:!this.state.isArise});
  };

  clickCompile=()=>{
    this.setState({isTurn:!this.state.isTurn});
  };

  clickSelectAll=()=>{
   this.setState({isCheck:this.state.isCheck});
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

            <NavLink to={'/'} className={`${this.state.isTurn?'select':''}`}>
              <i className='first iconfont icon-bofang11'></i>
              <span className='all-play'>播放全部</span>
              <span className='total-song'>（共3首）</span>
            </NavLink>

            <div className='all-choice'>
            <i className={`choice-none iconfont icon-weixuanzhongyuanquan${!this.state.isTurn?' active':''}`}></i>
            <span className={`all-check${!this.state.isTurn?' active':''}`} onClick={this.clickSelectAll}>全选</span>
              {/*<i className='choiced iconfont icon-2xuanzhong'></i>*/}
            </div>

            <div className={`multiple-choice${this.state.isTurn?' active':''}`}
                 onClick={this.clickCompile}>
              <i className='iconfont icon-liebiao'></i>
              <span>多选</span>
            </div>

            <span className={`finish${!this.state.isTurn?' active':''}`}
                  onClick={this.clickCompile}>完成</span>

          </div>

          <ul className='songs'>
            <li className={this.state.isTurn?' active':''}>
              <Link to={'/'}>
              <div className='song-name'>
                <i className={`choice-none iconfont icon-weixuanzhongyuanquan${!this.state.isTurn?' active':''}`}></i>
                <p>彩虹</p>
                <span>周杰伦 - 主打</span>
              </div>
                <i className={`iconfont icon-more${this.state.isTurn?' active':''}`}></i>
              </Link>
            </li>

            <li className={this.state.isTurn?' active':''}>
              <Link to={'/'}>
              <div className='song-name'>
                <i className={`choice-none iconfont icon-weixuanzhongyuanquan${!this.state.isTurn?' active':''}`}></i>
                <p>彩虹</p>
                <span>周杰伦 - 主打</span>
              </div>
                <i className={`iconfont icon-more${this.state.isTurn?' active':''}`}></i>
              </Link>
            </li>

             <li className={`rubbish${this.state.isTurn?' active':''}`} onClick={this.clickDelete} >
              <span><i className='iconfont icon-dustbin_icon'></i>清除播放记录</span>
              {this.state.isArise?<div className='layer-delete'>
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

