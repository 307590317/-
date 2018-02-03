import React,{Component} from 'react';
import './index.less'
import {NavLink} from 'react-router-dom'
export default class SubmitDynamic extends Component{
    render(){
    return (
        <div className="Submit-dynamic">
            <header className="Submit-dynamic-header">
                <div className="Submit-dynamic-header-container">
                    <NavLink to={"/friend/dynamic"}>取消</NavLink>
                    <span className="share">分享</span>
                    <NavLink to={"/friend/dynamic"}>发送</NavLink>
                </div>

            </header>

            <div className="Submit-dynamic-content">
                <li className="talk-music">一起聊聊音乐吧~</li>
                <div className="fix-container">
                    <div className="add-picture">+</div>
                    <NavLink className="add-dynamic-music" to={"/Home"}>
                        配上动感的音乐</NavLink>
                    <img className="logo-wangyiyun" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1517662026&di=f789acb53e41f711ab353e9bb55c260e&src=http://pic31.photophoto.cn/20140624/0007019944077411_b.jpg" alt=""/>
                  </div>

            </div>

            <a href="https://weibo.com/?sudaref=www.baidu.com&display=0&retcode=6102" className="share-to-weibo">同时分享到微博<img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517673078767&di=e2c9e133f054a00536821a05d6a0bd1c&imgtype=0&src=http%3A%2F%2Fpic28.photophoto.cn%2F20130928%2F0022005537846098_b.jpg" className="weibo-logo" alt=""/>
            </a>

        </div>
    );
    }

}
