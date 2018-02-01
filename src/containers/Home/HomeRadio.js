import React from 'react';
import HomeSwiper from "./HomeSwiper";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';


@connect(state => ({...state.homeReducer}), actions)
export default class HomeRadio extends React.Component {
    componentDidMount() {
        this.props.getBannerAPI();
    }

  render(){
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
    </div>
  }
}
