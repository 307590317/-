import React from 'react';
import './index.less';
import {Link, Route} from 'react-router-dom';
import EstablishList from "./EstablishList";
import Shade from "./Shade";
import MHeader from "../../components/MHeader/MHeader";
import {connect} from 'react-redux';
import actions from "../../store/actions/mymusic";
import commonActions from "../../store/actions/common";
import LatestPlay from "./LatestPlay/LatestPlay";

/*import {getRecord} from "../../api/gjx";
import 'babel-polyfill'*/

@connect((state)=>({...state.mymusicReducer,...state.common}),{...actions,...commonActions})
export default class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      isPopUp: false,
      data: {}
    }
  }

  clickShow = (e) => {
    this.setState({isShow: !this.state.isShow});
    e.stopPropagation();
  };
  clickPopUp = (e) => {
    e.stopPropagation();
    this.setState({isPopUp: !this.state.isPopUp});
  };
  componentDidMount(){
    if(!this.props.userId){
      console.log(1);
      return;
    }
    /*点击清除时，修改标识，再次切换到此组件后，最近播放数据仍然为空*/
    this.props.flag?this.props.getRecordAPI(this.props.userId):null;
    this.props.getUserDjAPI(this.props.userId);
    //对应新建歌单
    this.props.getUserListAPI(this.props.userId);
  }
 /* /!*清空数据后再次登录数据为空*!/
  handelKeep=()=>{
    this.props.clearNearlyEmpty();
  };*/


  render() {
    //console.log(this.props.record.weekData.length);
    // let data=this.props.record,
    //   weekData=data.weekData||[],
    //   length=weekData.length;
    // console.log(length);
    //console.log(this.props);
    return (
      <div className='mymusic'>
        <MHeader data={this.state.data}>
          <i className="iconfont icon-yunzhanghu"></i>
          <div className='headerCenter'>
            我的音乐
          </div>
        </MHeader>
        <div className='content'>
          <ul className='select-list'>
            <Link to='/'>
              <li className='clearfix'>
                <i className='iconfont icon-yinyue front'></i>
                <p>本地音乐</p>
                <span>9</span>
                <i className='back iconfont icon-fanhui2'></i>
              </li>
            </Link>

            <Link to={{pathname:'/latestplay'}}>
              <li>
                <i className='iconfont icon-bofang2 front '></i>
                <p>最近播放</p>
                <span>{this.props.record.weekData.length||0}</span>
                <i className='back iconfont icon-fanhui2'></i>
              </li>
            </Link>

            <Link to='/'>
              <li>
                <i className='front iconfont icon-diantai'></i>
                <p>我的电台</p>
                <span>{this.props.dj.count||0}</span>
                <i className='back iconfont icon-fanhui2'></i>
              </li>
            </Link>

            <Link to='/'>
              <li className='last'>
                <i className='front iconfont icon-shoucang'></i>
                <p>我的收藏</p>
                <span>{this.props.userId?3:0}</span>
                <i className='back iconfont icon-fanhui2'></i>
              </li>
            </Link>

          </ul>

          <div className='song-list'>
            <div className='song-text' onClick={this.clickShow}>
              {this.state.isShow?
                <i className="forwards iconfont icon-xiangxiajiantou"></i>:
                <i className='forwards iconfont icon-fanhui2'></i>
              }
              <span>我创建的歌单({`${this.props.userList.playlist?this.props.userList.playlist.length:0}`})</span>
              <i className='backwards iconfont icon-more' onClick={this.clickPopUp}></i>
              {this.state.isShow ? <EstablishList/> : null}
            </div>
          </div>
          {this.state.isPopUp ? <Shade/> : null}
        </div>

      </div>
    )
  }
}