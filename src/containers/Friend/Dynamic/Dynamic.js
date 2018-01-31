import React from 'react';
import MHeader from "../../../components/MHeader/MHeader";
import a from './img/1.jpg'
import './index.less'
import {Link} from 'react-router-dom'
export default class Friend extends React.Component {
    handleCheck = () => {
        console.log(1);
        setTimeout(() => {
            this.setState({check: !this.state.check});
        }, 300)
    };

    constructor(props) {
        super(props);
        this.state = {check: true}
    }

    render() {
        return (
            <div className="friend">
                <MHeader>
                    <i className="iconfont icon-tianjiahaoyou"></i>
                    <div className='friendCenter'>
                        <Link to={"/friend/dynamic"}>朋友</Link>
                    </div>
                </MHeader>
                <div className="content">

                    {/*这些内容以后循环遍历来获取*/}
                    <div className="each-content">
                        <header className="header">
                            <Link to={"/xxx1"}>
                                <img src={a} alt=""/>
                            </Link>
                            <div className="next-to-img">
                                  <span className="my-name">
                            小可爱baby
                                </span>
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

                </div>
            </div>

        )
    }
}

