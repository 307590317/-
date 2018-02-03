import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import MHeader from "../../../components/MHeader/MHeader";
import './LatestPlay.less'
import index from "../../../store/reducer";
import actions from "../../../store/actions/mymusic";
@connect((state)=>({...state.mymusicReducer}),actions)
export default class LatestPlay extends React.Component {
  constructor() {
    super();
    this.state={
      isArise:false,
      isTurn:false,
      isClear:false,
      isAllCheck: false,
      isSelNum: 0
      /*isAllCheck:false,
      isSingleCheck:false*/
    }
  }

  clickDelete = () => {
    this.setState({isArise: !this.state.isArise});
  };

  clickCompile = () => {
    this.setState({isTurn: !this.state.isTurn});
  };

  clickSelectAll = () => {
    this.setState({isCheck: this.state.isCheck});
  };

  /*清除播放记录*/
 /*isClear:!this.state.isClear*/
  clickClear=()=>{
    dispatch()
  };


  /*this.props.record.weekData
item
音乐名称：item.song.name
作者+专辑：`${item.song.ar[0].name} - ${item.song.al.name}`
作者+专辑：`${item.song.ar[0].name}/${item.song.ar[1].name} - ${item.song.al.name}`*/


  handleClick = (e) => {
    e.target.isSelscted = true;
    this.setState({isSelNum: isSelNum + 1});
    let length = this.props.record.weekData.slice(0, 2);//2
    this.state.isSelNum === length ? this.state.isAllCheck = true : null;
  };
  go=()=>{
    this.props.history.go(-1);
  };
  render() {

    let data=this.props.record.weekData.slice(0,10);

    return (
      <div>
        <MHeader>
          <i className="iconfont icon-fanhui" onClick={this.go}></i>
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
              <i className={`choice-none iconfont icon-weixuanzhongyuanquan${!this.state.isTurn ? ' active' : ''}`}></i>
              <span className={`all-check${!this.state.isTurn ? ' active' : ''}`}
                    onClick={this.clickSelectAll}>全选</span>
              {/*<i className='choiced iconfont icon-2xuanzhong'></i>*/}
            </div>

            <div className={`multiple-choice${this.state.isTurn ? ' active' : ''}`}
                 onClick={this.clickCompile}>
              <i className='iconfont icon-liebiao'></i>
              <span>多选</span>
            </div>

            <span className={`finish${!this.state.isTurn ? ' active' : ''}`}
                  onClick={this.clickCompile}>完成</span>

          </div>

          <ul className='songs'>
            {this.props.record.weekData.map((item,index)=>{
              return(
                <li className={this.state.isTurn?' active':''} key={index}>
                  <Link to={{pathname:`/detail${item.song.id}`,state:{path:`/detail`}}}>
                  {/*<Link to={`/detail/${item.song.id}`}>*/}
                    <div className='song-name'>
                      <i className={`choice-none iconfont icon-weixuanzhongyuanquan${!this.state.isTurn?' active':''}`}></i>
                      <p>{item.song.name}</p>
                      <span>{item.song.ar.length===1?`${item.song.ar[0].name} - ${item.song.al.name}`:`${item.song.ar[0].name}/${item.song.ar[1].name} - ${item.song.al.name}`}</span>
                    </div>
                    <i className={`iconfont icon-more${this.state.isTurn?' active':''}`}></i>
                  </Link>
                </li>
              )
            })}
             <li className={`rubbish${this.state.isTurn?' active':''}`} onClick={this.clickDelete}>
              <span><i className='iconfont icon-dustbin_icon'></i>清除播放记录</span>
              {this.state.isArise ? <div className='layer-delete'>
                <div className='clear-list'>
                  <p>确定清除播放记录</p>
                  <button className='clear-away' onClick={this.clickClear}>清除</button>
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

