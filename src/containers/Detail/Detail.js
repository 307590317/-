import React from 'react';
import './index.less';

export default class Detail extends React.Component {
    constructor() {
        super();
        this.state = {flag: false, flag1: false, flag2: 1}
    }

    /*点击切换类名*/
    changeClass = () => {
        this.setState({flag: !this.state.flag});
    };
    changeName = () => {
        this.setState({flag1: !this.state.flag1});
    };
    changeClassName = () => {
        if (this.state.flag2 <= 3) {
            this.setState({flag2: this.state.flag2 + 1});
            if (this.state.flag2 === 3) {
                this.setState({flag2: 1});
            }
        }
    };

    render() {
        return (
            <div className="detail">
                <div className="header">
                    <i className="back iconfont icon-fanhui"></i>
                    <div className="musicName">
                        <span className="name">无问西东</span>
                        <span className="singer">王菲<i className="arrows iconfont icon-fanhui2"></i></span>
                    </div>
                    <i className="share iconfont icon-fenxiang"></i>
                </div>
                <div className="body">
                    <div className="btn">
                        {/*点击之前className：icon-aixin   点击之后：icon-xin*/}
                        <i className={this.state.flag ? "like iconfont icon-aixin" : "like iconfont icon-xin"}
                           onClick={this.changeClass}></i>
                        <i className="download iconfont icon-download"></i>
                        <i className="comment iconfont icon-pinglun"></i>
                        <i className="details iconfont icon-101"></i>
                    </div>
                    <div className="progress">
                        <span className="already">00:00</span>
                        <div className="timeLine">
                            <div className="run">
                                <div className="runBtn">
                                    <div className="dot"></div>
                                </div>
                            </div>
                        </div>
                        <span className="total">03:15</span>
                    </div>
                </div>
                <div className="footer">
                    <i className={this.state.flag2==1?"goBack iconfont icon-fanhui1":(this.state.flag2==2?"goBack iconfont icon-suijibofang":"goBack iconfont icon-danquxunhuan")} onClick={this.changeClassName}></i>
                    <i className="playLeft iconfont icon-zuobofang"></i>
                    <i className={this.state.flag1 ? "play iconfont icon-bofang" : "play iconfont icon-bofang1"}
                       onClick={this.changeName}></i>
                    <i className="playRight iconfont icon-youbofang"></i>
                    <i className="list iconfont icon-liebiao2"></i>
                </div>
            </div>
        )
    }
}