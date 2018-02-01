import React from 'react';
import MHeader from "../../components/MHeader/MHeader";
import './index.less';
import {Route, Switch, NavLink} from 'react-router-dom';
import HomeMusic from "./HomeMusic";
import HomeVideo from "./HomeVideo";
import HomeRadio from "./HomeRadio";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import HomeTop from "./HomeTop";
import ReactSwipe from 'react-swipe';
import './index.less';

@connect(state => ({...state}), actions)
export default class Ho extends React.Component {
    constructor() {
        super();
        this.state = {index: 0}
    }


    render() {

        let opts = { continuous: true,
            callback: (index) => {

                this.setState({index});//每次循环后将索因 印射在组件上
            }
        };

        // console.log(this.state.index);
        return (
            <div className='home'>
                <MHeader>
                    <i className="iconfont icon-shiwu-maikefeng"></i>
                    <div className='headerCenter'>
                        <i className="iconfont icon-sousuo"></i>
                        <input type="text" placeholder="推荐好歌"/>
                    </div>
                </MHeader>

                <div className='content'>


                    <div className="home-router">
                        <ReactSwipe className="carousel" swipeOptions={opts}>
                            {[HomeMusic, HomeVideo,HomeRadio].map((C, index) => {
                                C=[HomeMusic, HomeVideo,HomeRadio][this.state.index];

                                    return <div key={index}>

                                        `{<C/>}`
                                    </div>
                                }
                            )}
                        </ReactSwipe>

                        <div className="home-top">

                            {['音乐', '视屏', '电台'].map((C, key) => (
                                <span href="#" className={this.state.index === key ? 'active' : null} key={key}
                                   onClick={() => {
                                       this.setState({index: key})
                                   }}>
                                    {C}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}