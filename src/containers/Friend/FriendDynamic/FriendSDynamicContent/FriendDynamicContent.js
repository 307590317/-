import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less';
import './utils.min'
import a from './img/a.jpg'
import b from './img/e.jpg'
import Data from './json.json'
export default class FriendDynamicContent extends Component{
    constructor(props){
        super();
        this.state={praise:false};

    }
    handlePraise=()=>{
        this.setState({praise:!this.state.praise});
    };
    render(){
        let total=this.props.total;
        let more=this.props.more;
        let data=Data.user;
        let PraiseStyle={color:"red"};
        let noPraiseStyle={color:"#616162"};
       /* console.log(data,'arr');/!*数组*!/*/
        return (
            data.map((item,index)=>{
                console.log(userPhoto);
                let userPhoto=item.userPhoto;
                let username=item.username;
                let contentTitle=item.contentTitle;
                let content=item.content;
                return <div key={index} className="each-content">
                    <header className="header">
                        <Link className="user-photo" to={'/profile'}>
                            <img src={b} alt=""/>
                        </Link>
                        <div className="next-to-img">
                            <Link to={"/profile"} className="my-name">
                                {username}
                            </Link>
                            <Link to={'/reg'} className="dispatch-audio">
                                发布视频
                            </Link>
                        </div>
                        <p className="lately">最近</p>

                        <Link to={'/login'} className="notice-me">
                            <strong>＋</strong>
                            <strong>关注</strong>
                        </Link>
                    </header>

                    <span className="friend-dynamic-title-and-cotent">
                         <Link to={'/frienddynamicdetail'}>
                    <strong>{contentTitle}</strong>
                    </Link>
                        <Link to={'/playfrienddynamiccontent'}>
                             <img src={a} alt=""/>
                        </Link>
                    </span>
                    <p className="content-document">~~我们是超级无敌的逗逼视频~~</p>
                    <footer className="friend-dynamic-number">

                        <span className="iconfont icon-zan" style={this.state.praise?PraiseStyle:noPraiseStyle}
                              onClick={this.handlePraise}>123</span>
                        <span className="iconfont icon-yduibianxie">345</span>
                        <span className="iconfont icon-fenxiang-tianchong">7894</span>
                        <span className="more-thing">...</span>
                    </footer>
                    {/*
                什么叫做一级路由，切换的页面支架没有任何的关系
                什么是二级路由？
                二级路由要写在一级路由里面
                  你写的内容在一级的基础上再添加筛选这叫做二级路由
                什么是三级路由，
                三级路由要写再二级路由里面
                你的内容要在二级路由的基础上再添加或者筛选而不是完全进入了一个新的页面这叫做三级路由*/}
                </div>
            })
      );
    }
}
