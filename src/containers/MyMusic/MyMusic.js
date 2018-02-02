import React from 'react';
import './index.less';
import {Link, Route} from 'react-router-dom';

import EstablishList from "./EstablishList";
import Shade from "./Shade";
import MHeader from "../../components/MHeader/MHeader";
import LatestPlay from "./LatestPlay/LatestPlay";

import {getRecord} from "../../api/gjx";
import 'babel-polyfill'
/*import {connect} from 'react-redux';
import actions from "../../store/actions/mymusic";
@connect(state=>({...state.mymusciReducer}),actions)*/
export default class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      isPopUp: false,
      data:{}
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
  /*使用async await修饰后需要导入babel-polyfill模块解析*/
  async componentDidMount(){
    //获取到数据后需要放到redux中的调用方法
    // this.props.getRecordAPI('248846943');
  //  不需要往redux中存放数据的调用方法
     let data=await getRecord('248846943');
     this.setState({data});
  }

  render() {
    // console.log(this.props);
    // console.log(this.props.record.weekData.length);
    // let data=this.props.record,
    //   weekData=data.weekData||[],
    //   length=weekData.length;
    // console.log(length);
    console.log(this.state.data);
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

            <Link to='/latestplay'>
              <li>
                <i className='iconfont icon-bofang2 front '></i>
                <p>最近播放</p>
                <span>{/*{this.props.weekData.length}*/}</span>
                <i className='back iconfont icon-fanhui2'></i>
              </li>
            </Link>
            <Link to='/'>
              <li>
                <i className='front iconfont icon-diantai'></i>
                <p>我的电台</p>
                <span>7</span>
                <i className='back iconfont icon-fanhui2'></i>
              </li>
            </Link>
            <Link to='/'>
              <li className='last'>

                <i className='front iconfont icon-shoucang'></i>
                <p>我的收藏</p>
                <span>33</span>
                <i className='back iconfont icon-fanhui2'></i>

              </li>
            </Link>
          </ul>
          <div className='song-list'>
            <div className='song-text' onClick={this.clickShow}>
              <i className='forwards iconfont icon-fanhui2'></i>
              <span>我创建的歌单(111)</span>
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