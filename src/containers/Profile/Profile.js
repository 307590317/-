import React from 'react';
import './index.less';
import MHeader from "../../components/MHeader/MHeader";
export default class Profile extends React.Component {
  render(){
    return (
        <div className='profile'>
          <MHeader>
            <i className='empty'></i>
            <div className='ProfileCenter'>
              账号
            </div>
          </MHeader>
        </div>
    )
  }
}