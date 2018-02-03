import React from 'react';
import {connect} from 'react-redux';

import index from "../../store/reducer";
import actions from "../../store/actions/common";

@connect((state)=>({...state.common}),actions)
export default class EstablishList extends React.Component {
  componentDidMount(){
    this.props.getUserListAPI('248846943');
  }

  //对象.playlist
  /*
  playlist.length

  item

  图片src:item.coverImgUrl
  歌单名称:item.name
  几首歌:item.trackCount*/

  render(){
    return <div>
      <ul className='layer-left'>
        {this.props.userList.playlist.map((item,index)=>{
          let {coverImgUrl,name,trackCount,cloudTrackCount}=item;
          return (
            <li key={index}>
              <img src={coverImgUrl} />
              <div className='describe'>
                <p>{name}</p>
                <span>{cloudTrackCount===0?`${trackCount}首`:`${trackCount}首，已下载${cloudTrackCount}首`}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  }
}

