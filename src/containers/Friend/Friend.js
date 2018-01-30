import React from 'react';
import './index.less';
import MHeader from "../../components/MHeader/MHeader";
export default class Friend extends React.Component {
  render(){
    return (
        <div className='friend'>
          <MHeader>
            <i className="iconfont icon-tianjiahaoyou"></i>
            <div className='friendCenter'>
              <div>

              </div>
            </div>
          </MHeader>
        </div>
    )
  }
}