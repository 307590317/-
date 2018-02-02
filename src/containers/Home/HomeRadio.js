import React from 'react';
import HomeSwiper from "./HomeSwiper";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import HomeTop from "./HomeTop";


@connect(state => ({...state.homeReducer}), actions)
export default class HomeRadio extends React.Component {


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
                <i className='iconfont icon-zhixian'></i>
                <h5>付费精品 <i className='iconfont iconfont icon-fanhui2'></i></h5>
            </div>
            <ul >
                <li>
                    <div className='vip-left' >
                        <img src="http://img1.imgtn.bdimg.com/it/u=2916390227,3292952952&fm=11&gp=0.jpg" alt=""/>
                        <span>01月25日更新</span>
                    </div>

                    <div className="vip-right">
                        <h4>音乐时间</h4>
                        <p className='vip-info' >safddddddddddsaad</p>
                        <p className='vip-name'>safddddddddddsaad</p>
                        <p className='vip-price' >￥199元/ <span>svip $123</span></p>

                    </div>
                </li>
            </ul>
        </div>
    </div>
  }
}
