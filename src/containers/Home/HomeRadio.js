import React from 'react';
import HomeSwiper from "./HomeSwiper";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';


@connect(state => ({...state.homeReducer}), actions)
export default class HomeRadio extends React.Component {
  /*componentDidMount() {
    this.props.getBannerAPI();
  }*/

  render() {
    return <div className='home-radio'>
      <HomeSwiper lists={this.props.banners}/>

      <ul className="two-icon">
        <li>
          <a href="#">
            <i className='iconfont icon-fenlei '></i>
            <span>电台分类</span>
          </a>

        </li>
        <li>
          <a href="#">
            <i className='iconfont icon-bijibennotebook43'></i>
            <span>电台排行</span>
          </a>
        </li>
      </ul>
      <hr/>

      <div className='radio-vip'>
        <div className='radio-title'>
          <i></i>
          <h4>付费精品 <i className='iconfont icon-fanhui2'></i></h4>
        </div>
        <ul>
          <li>
            <div className='vip-left'>
              <img src="http://img1.imgtn.bdimg.com/it/u=2916390227,3292952952&fm=11&gp=0.jpg" alt=""/>
              <span>time</span>
            </div>

            <div className="vip-right">
              <h4>音乐时间</h4>
              <p className='vip-info'>safddddddddddsaad</p>
              <p className='vip-name'>safddddddddddsaad</p>
              <p className='vip-price'>safddddddddddsaad</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  }
}
