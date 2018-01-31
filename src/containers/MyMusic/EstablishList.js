import React from 'react';
export default class EstablishList extends React.Component {
  render(){
    return <div>
      <ul className='layer-left'>
        <li>
          <img src="" alt=""/>

          <div className='describe'>
            <p>我喜欢的音乐</p>
            <i className='little'></i>
            <span>32首，已下载5首</span>
          </div>

          <i className='trumpet'></i>

        </li>
        <li>
          <img src="" alt=""/>

          <div className='describe'>
            <p>美式乡村音乐</p>
            <i className='little'></i>
            <span>23首，已下载11首</span>
          </div>
        </li>

      </ul>
    </div>
  }
}

