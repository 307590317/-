import React from 'react';
import MHeader from "../../components/MHeader/MHeader";
import './index.less';
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
        <div className='home'>
          <MHeader>
            <i className="iconfont icon-shiwu-maikefeng"></i>
            <div className='headerCenter'>
              <i className="iconfont icon-sousuo"></i>
              <input type="text" placeholder="推荐好歌"/>
            </div>
          </MHeader>
          {/*<ScrollableTabView renderTabBar={() => <DefaultTabBar/>}>*/}
            {/*<Text tabLabel='Tab1'/>*/}
            {/*<Text tabLabel='Tab2'/>*/}
            {/*<Text tabLabel='Tab3'/>*/}
            {/*<Text tabLabel='Tab4'/>*/}
            {/*<Text tabLabel='Tab5'/>*/}
            {/*<Text tabLabel='Tab6'/>*/}
          {/*</ScrollableTabView>*/}
        </div>
    )
  }
}