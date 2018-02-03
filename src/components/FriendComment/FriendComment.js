import React,{Component} from 'react';
import a from './img/1.jpg'
import {NavLink} from 'react-router-dom'
import './index.less'
import {connect} from 'react-redux'
import friendDynamicActions from '../../store/actions/friend';

@connect(state=>({...state.friendReducer}),friendDynamicActions)
export default class FriendComment extends Component{
    constructor(props){
        super();
      this.state={praise:false};

    }
    componentDidMount(){
        this.props.get_friend_dynamic_detail_comments("186016", "15")

    }
    handlePraise=()=>{
        this.setState({praise:!this.state.praise});
    };

    render(){
       /* console.log(1,"render");会渲染16次*/
        let  code=this.props.code;
        let moreHot=this.props.moreHot;
        let hotComments=this.props.hotComments;
        let comments=this.props.comments;
        let total=this.props.total;
        let more=this.props.more;
       /* console.log(this.state.comments,'render');在这里取不到state的值*/
        let PraiseStyle={color:"red"};
        let noPraiseStyle={color:"#616162"};
        return (

        <div className="friend-dynamic-comment">
            <ul>
                {code===200?hotComments.map((item,index)=>{
                    let user=item.user;
                    return  <li key={index} className="each-user">
                        <NavLink to={"/profile"} className="click-to-userprofile">
                            <img src={user.avatarUrl} alt=""/>

                            <span className="user-name">{user.nickname}</span>
                        </NavLink>
                            <div className="praisenumber-container">
                            <i className="praisenumber-number ">{item.likedCount}</i>
                            <i className="praisenumber iconfont icon-zan"
                            style={this.state.praise?PraiseStyle:noPraiseStyle}
                               onClick={this.handlePraise}
                            ></i>
                            </div>
                        <p className="comment-content">
                            {item.content}
                        </p>
                    </li>

                }):<li className="each-user">
                    <NavLink to={"/profile"} className="click-to-userprofile">
                        <img src={a} alt=""/>
                        <span className="user-name">其实还好</span>
                    </NavLink>
                        <div className="praisenumber-container">
                            <i className="praisenumber-number ">124</i>
                            <i className="praisenumber iconfont icon-zan" ></i>
                        </div>


                    <p className="comment-content">
                        我是一个小小鸟，一直的往前飞啊
                    </p>
                </li>}

            </ul>
        </div>
      );
    }
}
