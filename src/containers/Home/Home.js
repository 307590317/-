import React from 'react';
import MHeader from "../../components/MHeader/MHeader";
import {getBanner} from "../../api/home";

export default class Home extends React.Component {
  constructor(){
    super();
    this.state={banner:[]};
  }
  async componentDidMount(){
    let banner=await getBanner();
    console.log(banner);
    this.setState({banner});
  }
  render(){
    return (
        <div>
          <MHeader>
            <i className="iconfont icon-shiwu-maikefeng"></i>
            <i className="iconfont icon-sousuo sousuo"></i>
            <input type="text" placeholder="推荐好歌"/>
          </MHeader>
        </div>
    )
  }
}