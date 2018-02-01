import React from 'react';
import './index.less';
import {Route, NavLink} from 'react-router-dom';
import MHeader from "../../components/MHeader/MHeader";
import Dynamic from "./FriendDynamic/FriendDynamic";
import Nearby from "./FriendNearby/FriendNearby";

export default class Friend extends React.Component {
    render() {
        return (
            <div className='friend'>
                <MHeader>
                    <i className="iconfont icon-tianjiahaoyou"></i>
                    <div className='friendCenter'>
                        <div className='change'>
                            <NavLink to={'/friend/dynamic'}
                                     className={this.props.location.pathname === '/friend/dynamic' || this.props.location.pathname === '/friend' ? 'select' : ''}>动态</NavLink>
                            <NavLink to={'/friend/nearby'}
                                     className={this.props.location.pathname === '/friend/nearby' ? 'select' : ''}>附近</NavLink>
                        </div>
                    </div>
                </MHeader>

                <div className="content">
                    <div className='router'>
                        <Route path={'/friend'} exact={true} component={Dynamic}/>
                        <Route path={'/friend/dynamic'} component={Dynamic}/>
                        <Route path={'/friend/nearby'} component={Nearby}/>
                    </div>

                </div>
            </div>
        );
    }
}
