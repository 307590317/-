import React from 'react';
import MHeader from "../../components/MHeader/MHeader";
import './comment.less';
import {NavLink} from 'react-router-dom';

export default class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            zan: false,
            zanStyle: {color: 'red'},
            unZanStyle: {color: '#a1a5a4'}
        }
    }

    changeZan = () => {
        this.setState({zan: !this.state.zan});
        console.log(this.state.zan);
    };

    render() {
        return <div>
            <MHeader>
                <NavLink to='/detail/:id'>
                    <i className="comment-back iconfont icon-fanhui"></i>
                </NavLink>
                <div className="title">评论(1234)</div>
            </MHeader>
            <div className="content">
                <div className="musicDetail">
                    <img src="" className="musicPic"/>
                    <b>Lie</b>
                    <span>Shallou/RIAH</span>
                    <i className="myIconr iconfont icon-fanhui2"></i>
                </div>
                <div className="comment-title">精彩评论</div>
                <ul className="commentList">
                    <li>
                        <div className="comment-head">
                            <img src="" alt=""/>
                            <span className="nickname">昵称昵称</span>
                            <b className="commemt-date">1月20日</b>
                            <span className="commentNum">1200</span>
                            <i className="iconfont icon-zan"
                               style={this.state.zan ? this.state.zanStyle : this.state.unZanStyle}
                               onClick={this.changeZan}></i>
                        </div>
                        <div className="comment-text">
                            评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
                        </div>
                    </li>
                    <li>
                        <div className="comment-head">
                            <img src="" alt=""/>
                            <span className="nickname">昵称昵称</span>
                            <b className="commemt-date">1月20日</b>
                            <span className="commentNum">1200</span>
                            <i className="iconfont icon-zan"></i>
                        </div>
                        <div className="comment-text">
                            评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
                        </div>
                    </li>
                    <li>
                        <div className="comment-head">
                            <img src="" alt=""/>
                            <span className="nickname">昵称昵称</span>
                            <b className="commemt-date">1月20日</b>
                            <span className="commentNum">1200</span>
                            <i className="iconfont icon-zan"></i>
                        </div>
                        <div className="comment-text">
                            评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
                        </div>
                    </li>
                    <li>
                        <div className="comment-head">
                            <img src="" alt=""/>
                            <span className="nickname">昵称昵称</span>
                            <b className="commemt-date">1月20日</b>
                            <span className="commentNum">1200</span>
                            <i className="iconfont icon-zan"></i>
                        </div>
                        <div className="comment-text">
                            评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
                        </div>
                    </li>
                    <li>
                        <div className="comment-head">
                            <img src="" alt=""/>
                            <span className="nickname">昵称昵称</span>
                            <b className="commemt-date">1月20日</b>
                            <span className="commentNum">1200</span>
                            <i className="iconfont icon-zan"></i>
                        </div>
                        <div className="comment-text">
                            评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
                        </div>
                    </li>
                    <li>
                        <div className="comment-head">
                            <img src="" alt=""/>
                            <span className="nickname">昵称昵称</span>
                            <b className="commemt-date">1月20日</b>
                            <span className="commentNum">1200</span>
                            <i className="iconfont icon-zan"></i>
                        </div>
                        <div className="comment-text">
                            评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    }
}
