import React from 'react';
import './index.less';
import EstablishList from "./EstablishList";
import Shade from "./Shade";


export default class MyMusic extends React.Component {
  constructor(){
    super();
    this.state={
      isShow:false,
      isPopUp:false
    }
  }

  clickShow=()=>{
    this.setState({isShow:!this.state.isShow})
  };
  clickPopUp=(e)=>{
    e.stopPropagation();
    this.setState({isPopUp:!this.state.isPopUp});
    console.log(1);
  };



  render(){

    return (
        <div className='content'>

          <ul className='select-list'>
            <li className='clearfix'>
              <i className='front'></i>
              <p>本地音乐</p>
              <span>9</span>
              <i className='back'></i>
            </li>
            <li>
              <i className='front'></i>
              <p>最近播放</p>
              <span>100</span>
              <i className='back'></i>
            </li>
            <li>
              <i className='front'></i>
              <p>我的电台</p>
              <span>7</span>
              <i className='back'></i>
            </li>
            <li className='last'>
              <i className='front'></i>
              <p>我的收藏</p>
              <span>333</span>
              <i className='back'></i>
            </li>
          </ul>

          <div className='song-list'>

            <div className='song-text' onClick={this.clickShow}>
              <i className='forwards'></i>
              <span>我创建的歌单(111)</span>
              <i className='backwards' onClick={this.clickPopUp}></i>
              {this.state.isShow?<EstablishList/>:null}
              {this.state.isPopUp?<Shade/>:null}

            </div>

          </div>

        </div>

    )
  }
}