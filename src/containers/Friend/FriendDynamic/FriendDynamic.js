import React from 'react';
import './index.less'
import a from './img/1.jpg'
import {Link} from 'react-router-dom';

export default class FriendDynamic extends React.Component {
    render() {
        return (
            <div>
                <div className="dynamic-nav">

                    <div className="left-one">
                        <span className="iconfont icon-music"></span>
                        <span className="publish-dynamic">动态</span>
                    </div>

                    <div className="right-one">
                        <span className="iconfont icon-music"></span>
                        <span className="publish-audio">视频</span>
                    </div>
                </div>


                <div className="each-content">
                    <header className="header">
                        <Link to={'/notice'}>
                            <img src={a} alt=""/>
                        </Link>
                        <div className="next-to-img">
                                  <span className="my-name">
                            小可爱baby
                                </span>
                            <Link to={'/notice'} className="dispatch-audio">
                                发布视频
                            </Link>
                        </div>
                        <p className="lately">最近</p>

                        <Link to={'/notice'} className="notice-me">
                            <strong>＋</strong>
                            <strong>关注</strong>
                        </Link>
                    </header>

                    <span className="body">
                         <Link to={'/frienddynamicdetail'}>
                    <strong>我的是乐坛歌王，来挑战我吧我的是乐坛歌王，来挑战我吧我的是乐坛歌王，来挑战我吧我的是乐坛歌王，来挑战我吧</strong>
                    </Link>
                        <Link to={'/playfrienddynamiccontent'}>
                             <img src={a} alt=""/>
                        </Link>
                    </span>


                    <footer className="footer">
                        <span className="iconfont icon-music">123</span>
                        <span className="iconfont icon-music">345</span>
                        <span className="iconfont icon-music">7894</span>
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
            </div>


        )
    }
}