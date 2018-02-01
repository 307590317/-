import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import App from './containers/App';
import Home from "./containers/Home/Home";
import MyMusic from "./containers/MyMusic/MyMusic";
import Friend from "./containers/Friend/Friend";
import Profile from "./containers/Profile/Profile";
import Detail from "./containers/Detail/Detail";
import Comment from "./containers/Detail/Comment";
import Login from "./containers/Login/Login";
import NumLogin from "./containers/Login/NumLogin";
import Reg from "./containers/Reg/Reg";
import FriendDynamicDetail from "./containers/FriendDynamicDetail/FirendDynamicDetail";
import PlayDynamicContent from "./containers/PlayFriendDynamicContent/PlayFriendDynamicContent";
import ProfileDetail from "./containers/ProfileDetail/ProfileDetail";
import store from './store';
import './common/index.less';


render(<Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path={'/'} exact={true} component={Home}/>
                <Route path={'/home'} component={Home}/>
                <Route path={'/mymusic'} component={MyMusic}/>
                <Route path={'/friend'} component={Friend}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/detail/:id'} component={Detail}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/numlogin'} component={NumLogin}/>
                <Route path={'/reg'} component={Reg}/>
                <Route path={'/profileDetail'} component={ProfileDetail}/>
                <Route path={'/frienddynamicdetail'} component={FriendDynamicDetail}/>
                <Route path={'/playfrienddynamiccontent'} component={PlayDynamicContent}/>
                <Route path={'/comment'} component={Comment}/>

            </Switch>
        </App>
    </Router>
</Provider>, window.root);