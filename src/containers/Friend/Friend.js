import React from 'react';
import './index.less';
import {Route,NavLink} from 'react-router-dom';
import MHeader from "../../components/MHeader/MHeader";
export default class Friend extends React.Component {
  render(){
    return (
        <div className='friend'>
          <MHeader>
            <i className="iconfont icon-tianjiahaoyou"></i>
            <div className='friendCenter'>
              <div className='change'>
                <NavLink to={'/friend/dynamic'}>动态</NavLink>
                <NavLink to={'/friend/nearby'}>附近</NavLink>
              </div>
              <div className='router'>
                <Route path={'/friend/dynamic'}/>
              </div>
            </div>
          </MHeader>
        </div>
    )
  }
}