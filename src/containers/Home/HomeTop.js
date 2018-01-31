import React from 'react';
import {NavLink} from 'react-router-dom';

export default class HomeTop extends React.Component {
  render(){
    return <div className='home-top'>
        <NavLink to={'/home/music'} >
            <span>音乐</span>
        </NavLink>
        <NavLink to={'/home/video'}>
            <span>视频</span>
        </NavLink>
        <NavLink to={'/home/radio'}>
            <span>电台</span>
        </NavLink>
    </div>
  }
}
