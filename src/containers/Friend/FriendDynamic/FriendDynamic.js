import React from 'react';
import './index.less'

import {connect} from 'react-redux';
import FriendDynamicContent from "./FriendSDynamicContent/FriendDynamicContent";
@connect(state=>({...state.common}))
export default class FriendDynamic extends React.Component {
    constructor(props){
        super(props);
        this.state={praise:false}
    }
    handlePraise=()=>{
      this.setState({praise:!this.state.praise});
    };
    render() {
        let PraiseStyle={color:"red"};
        let noPraiseStyle={color:"#616162"};
        return (
            <div className="friend-dynamic">
                {/*头下面的导航*/}
                <div className="dynamic-nav">

                    <div className="left-one">
                        <span className="logo iconfont icon-fenxiang-tianchong"></span>
                        <span className="publish-dynamic">动态</span>
                    </div>

                    <div className="right-one">
                        <span className="logo iconfont icon-shipin"  style={this.state.praise?PraiseStyle:noPraiseStyle}
                              onClick={this.handlePraise}></span>
                        <span className="publish-audio">视频</span>
                    </div>
                </div>

                <FriendDynamicContent/>

            </div>


        )
    }
}