import React from 'react';
import './index.less'
import MHeader from "../../components/MHeader/MHeader";
export default class MyMusic extends React.Component {
  render(){
    return (
        <div className='mymusic'>
          <MHeader>
            <i className="iconfont icon-yunzhanghu"></i>
            <div className='headerCenter'>
              我的音乐
            </div>
          </MHeader>
        </div>
    )
  }
}