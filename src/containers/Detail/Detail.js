import React from 'react';
import './index.less';

export default class Detail extends React.Component {
    constructor() {
        super();
        this.state = {flag: false, flag1: false, flag2: 1}
    }

    /*点击切换类名  //点击切换字体图标*/
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
                <div className="detailHeader">
                    {/*<i className="back iconfont icon-fanhui"></i>*/}
                    <i className="back iconfont">&#xe6b7;</i>
                    <div className="musicName">
                        <span className="name">无问西东</span>
                        <span className="singer">王菲<i className="arrows iconfont icon-fanhui2"></i></span>
                    </div>
                    <i className="share iconfont">&#xe7c5;</i>
                </div>
                <div className="detailBody">
                    <div className="btn">
                        {/*点击之前className：icon-aixin   点击之后：icon-xin*/}
                        <i className={this.state.flag ? "like iconfont icon-aixin" : "like iconfont icon-xin"}
                           onClick={this.changeClass}></i>
                        <i className="download iconfont">&#xe64c;</i>
                        <i className="comment iconfont">&#xe601;</i>
                        <i className="details iconfont">&#xe60b;</i>
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
                <div className="detailFooter">
                    <i className={this.state.flag2 == 1 ? "goBack iconfont icon-fanhui1" : (this.state.flag2 == 2 ? "goBack iconfont icon-suijibofang" : "goBack iconfont icon-danquxunhuan")}
                       onClick={this.changeClassName}></i>
                    <i className="playLeft iconfont">&#xe62f;</i>
                    <i className={this.state.flag1 ? "play iconfont icon-bofang" : "play iconfont icon-stop"}
                       onClick={this.changeName}></i>
                    <i className="playRight iconfont">&#xe62e;</i>
                    <i className="list iconfont">&#xe600;</i>
                </div>
            </div>
        )
    }
}