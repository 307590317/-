import React from 'react';
import {connect} from 'react-redux';
import MHeader from "../../components/MHeader/MHeader";
import './comment.less';
import {NavLink} from 'react-router-dom';
import headPic from './img/touxiang.png';
import headImg from './img/tx.png';
import actions from '../../store/actions/comment';
import 'babel-polyfill';

@connect(state=>({...state.commentReducer}),actions)
export default class Comment extends React.Component {
    constructor(props) {
        super();
        this.state = {
            zan: false,
            zanStyle: {color: 'red'},
            unZanStyle: {color: '#a1a5a4'}
        }
    }

    componentDidMount(){
        //dispatch=>dispatch(getCommentAPI.aplly(this,...args))
        this.props.getCommentAPI('186016', '15');
        //console.log(this.props.getCommentAPI('186016', '15'),'aaaa');//为 undefined ？？？
        // this.props.getSongDetailAPI(33894312);
    };

    changeZan = () => {
        this.setState({zan: !this.state.zan});
    };
    go=()=>{
        this.props.history.go(-1);
    };
    render() {
        //console.log(this.props,'props');
        // console.log(this.props.hotComments,'hotComments');
        let hotComments=this.props.hotComments;
        let moreHot=this.props.moreHot;
        let code=this.props.code;
        let songs=this.props.songs;

        // console.log(songs[0].name,'songs');

       /* let ary=[{name:'zsq',age:10}];
        console.log(ary[0].name,'name');*/

       //=============
     // let songs=this.props.songs;
     //    console.log(songs,'songs');

        //build.js:50642 Uncaught TypeError: Cannot read property '0' of undefined

        return <div>
            <MHeader>
              <i className="iconfont icon-fanhui" onClick={this.go}></i>
              <div className="headerCenter">评论(1234)</div>
            </MHeader>
            <div className="content">
                    <div className="musicDetail">
                        <img src={songs[0].al.picUrl} className="musicPic"/>
                        <b>{songs[0].name}</b>
                        <span>{songs[0].ar[0].name}</span>
                        <i className="myIconr iconfont icon-fanhui2"></i>
                    </div>
                    <div className="comment-title">精彩评论</div>
                    <ul className="commentList">
                        {code===200?hotComments.map((item,index)=>{
                            let user=item.user;
                            return <li key={index}>
                            <div className="comment-head">
                                <img src={user.avatarUrl} alt=""/>
                                <span className="nickname">{user.nickname}</span>
                                <b className="commemt-date">{item.time}</b>
                                <span className="commentNum">{item.likedCount}</span>
                                <i className="iconfont icon-zan"
                                   style={this.state.zan ? this.state.zanStyle : this.state.unZanStyle}
                                   onClick={this.changeZan}></i>
                            </div>
                            <div className="comment-text">
                                {item.content}
                            </div>
                        </li>}): <li>
                            <div className="comment-head">
                                <img src={headImg} alt=""/>
                                <span className="nickname">昵称</span>
                                <b className="commemt-date">日期</b>
                                <span className="commentNum">1200</span>
                                <i className="iconfont icon-zan"
                                   style={this.state.zan ? this.state.zanStyle : this.state.unZanStyle}
                                   onClick={this.changeZan}></i>
                            </div>
                            <div className="comment-text">
                                评论内容评论内容
                            </div>
                        </li>
                        }
                    </ul>
                </div>
        </div>
    }
}
