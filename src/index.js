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
import Login from "./containers/Login/Login";
import NumLogin from "./containers/Login/NumLogin";
import store from './store';
import './common/index.less';
import SongList from "./containers/Home/HomeDetail/SongList";

render(<Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path={'/'} exact={true} component={Home}/>
                <Route path={'/home'} component={Home}/>
                <Route path={'/mymusic'} component={MyMusic}/>
                <Route path={'/friend'} component={Friend}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/songList'} component={SongList}/>
                <Route path={'/detail/:id'} component={Detail}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/numlogin'} component={NumLogin}/>
                <Route path={'/detail/:id'} component={Detail}/>
            </Switch>
        </App>
    </Router>
</Provider>, window.root);
