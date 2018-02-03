import React from 'react';
import HomeSwiper from "./HomeSwiper";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import {getBest} from "../../api/zsh";

@connect(state => ({...state.homeReducer}), actions)
export default class HomeRadio extends React.Component {
constructor(){
    super();
    this.state={value:{result:[{}]}};
}

 async componentDidMount(){
     this.props.getBannerAPI();
  let value=await getBest();
  this.setState({...this.state,value});

 }
  render() {
     let result=this.state.value.result;
      return <div className='home-radio'>
          {this.props.banners.length?<HomeSwiper lists={this.props.banners}/>:null}
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
                {result.map((item,index)=>(
                    <li key={index}>
                        <div className='vip-left' >
                            <img src={item.picUrl} alt=""/>
                            <span>01月25日更新</span>
                        </div>

                        <div className="vip-right">
                            <h4>{item.name}</h4>
                            <p className='vip-info' >{item.copywriter}</p>
                            <p className='vip-name'>{item.name}</p>
                            <p className='vip-price' >￥199.00元/ <span>svip $123</span></p>

                        </div>
                    </li>
                ))}

            </ul>
        </div>
    </div>
  }
}
