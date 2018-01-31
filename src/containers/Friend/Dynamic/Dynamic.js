import React from 'react';
import './index.less'
import a from './img/1.jpg'
import {Link} from 'react-router-dom';
export default class Dynamic extends React.Component {
  render(){
    return (
        <div className="each-content">
            <header className="header">
                <Link to={"/xxx1"}>
                    <img src={a} alt=""/>
                </Link>
                <div className="next-to-img">
                                  <span className="my-name">
                            小可爱baby
                                </span>ame
                    <Link to={"/xxx2"} className="dispatch-audio">
                        发布视频
                    </Link>
                </div>
                <p className="lately">最近</p>

                <Link to={"/notice"} className="notice-me">
                    <strong>＋</strong>
                    <strong>关注</strong>
                </Link>
            </header>
            <div className="body">
                <strong>bfsndfmgf,hj,gfdrsawertfewghgawrehwrgaerhgaerherahaerhaerhaerheay</strong>
                <img src={a} alt=""/>
            </div>
            <footer className="footer">
                <span className="iconfont icon-music">123</span>
                <span className="iconfont icon-music">345</span>
                <span className="iconfont icon-music">7894</span>
                <span className="more-thing">...</span>
            </footer>

        </div>
    )
  }
}