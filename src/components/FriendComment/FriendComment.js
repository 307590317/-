import React,{Component} from 'react';
import a from './img/1.jpg'
import {NavLink} from 'react-router-dom'
import './index.less'
export default class FriendComment extends Component{
    render(){
    return (
        <div className="friend-dynamic-comment">
           {/* <div className="container-title">
                <span>精彩评论</span>
            </div>*/}
            <ul>
                <li className="each-user">
                    <NavLink to={"/userprofile"} className="click-to-userprofile">
                        <img src={a} alt=""/>
                        <span className="user-name">其实还好</span>
                        <b className="praisenumber-number ">124</b>
                        <i className="praisenumber iconfont icon-zan"></i>
                    </NavLink>
                   <p className="comment-content">
                    我是一个小小鸟，一直的往前飞啊
                   </p>
                </li>
            </ul>
        </div>
      );
    }
}
