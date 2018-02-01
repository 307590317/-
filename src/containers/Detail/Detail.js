import React from 'react';
import './index.less';
import {NavLink} from 'react-router-dom';
import a from './img/placeholder_disk_210.png';
import b from './img/placeholder_disk_play_program.png';
import c from './img/placeholder_disk_play_song.png';
import d from './img/play_needle.png';
import e from './img/play_disc.png';

export default class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            flag: false,
            flag1: false,
            flag2: 1,
            showDownload1: {display: 'block'},
            showDownload2: {display: 'none'},
            appear: {display: 'none'},
            showMusicList: {display: 'none'},
            showListMask: {display: 'none'}
        }
    }

    /*点击切换类名  //点击切换字体图标*/
    changeClass = () => {
        this.setState({flag: !this.state.flag});
    };

    changeName = () => {
        this.setState({flag1: !this.state.flag1});
    };

    changeClassName = () => {
        this.setState({appear: {display: 'block'}});
        if (this.state.flag2 <= 3) {
            this.setState({flag2: this.state.flag2 + 1});
            if (this.state.flag2 === 3) {
                this.setState({flag2: 1});
            }
        }
        //=>用定时器控制切换播放方式按钮
        this.timer=setTimeout(()=> {
            this.setState({appear: {display: 'none'}});
        },3000)
    };

    showDownloadMask = () => {
        this.setState({showDownload1: {display: 'block'}, showDownload2: {display: 'block'}});
    };

    hideMask = () => {
        this.setState({showDownload1: {display: 'none'}, showDownload2: {display: 'none'}});
    };

    showMusicList=()=>{
        this.setState({showMusicList:{display:'block'},showListMask: {display: 'block'}});
    };

    hideListMask=()=>{
        this.setState({showListMask: {display: 'none'},showMusicList:{display:'none'}})
    };
    render() {
        return (
            <div className="detail">
                <div className="detailHeader">
                    <i className="back iconfont icon-fanhui"></i>
                    <div className="musicName">
                        <span className="name">无问西东</span>
                        <span className="singer">王菲</span>
                    </div>
                    <i className="share iconfont icon-fenxiang"></i>
                </div>
                <div className="detailBody">
                    <div className="imgDetailBox">
                        {/*<img src={a}/>
                        <img src={b}/>
                        <img src={c}/>*/}
                        <img src={d} className="img-d"/>
                        <img src={e} className="img-e"/>
                    </div>
                    <div className="btn">
                        {/*点击之前className：icon-aixin   点击之后：icon-xin*/}
                        <i className={this.state.flag ? "like iconfont icon-aixin" : "like iconfont icon-xin"}
                           onClick={this.changeClass}></i>
                        <i className="download iconfont icon-download" onClick={this.showDownloadMask}></i>
                        <NavLink to='/comment'><i className="comment iconfont icon-pinglun"></i></NavLink>
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
                <div className="detailFooter">
                    <i className={this.state.flag2 == 1 ? "goBack iconfont icon-fanhui11" : (this.state.flag2 == 2 ? "goBack iconfont icon-suijibofang" : "goBack iconfont icon-danquxunhuan")}
                       onClick={this.changeClassName}>
                        <span className="playMask"
                              style={this.state.appear}>{this.state.flag2 == 1 ? "循环播放" : (this.state.flag2 == 2 ? "随机播放" : "单曲循环")}</span>
                    </i>
                    <i className="playLeft iconfont icon-zuobofang"></i>
                    <i className={this.state.flag1 ? "play iconfont icon-bofang1" : "play iconfont icon-bofang11"}
                       onClick={this.changeName}></i>
                    <i className="playRight iconfont icon-youbofang"></i>
                    <i className="list iconfont icon-liebiao2" onClick={this.showMusicList}></i>
                </div>
                <div className="downloadMask" style={this.state.showDownload1} onClick={this.hideMask}>
                    <div className="dlMask" style={this.state.showDownload2}>
                        <ul>
                            <li>选择默认下载音质<span>可在账号-设置页修改</span></li>
                            <li>标准 (128kbit/s)</li>
                            <li>较高 (192kbit/s)</li>
                            <li>极高 (320kbit/s)</li>
                            <li>无损品质<i className="iconfont icon-vip1"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="musicdList"  style={this.state.showMusicList}>
                    <div className="musicdListHeader clearfix">
                        <ul>
                            <li>
                                <i className="iconfont icon-suijibofang"></i>
                            </li>
                            <li>随机播放</li>
                            <li>(90)</li>
                            <li><i className="iconfont icon-dustbin_icon"></i></li>
                            <li>收藏全部</li>
                            <li><i className="iconfont icon-shoucang1"></i></li>
                        </ul>
                    </div>
                    <ul className="musicdLists">
                        <li>
                            <span className="musicName">歌名歌名</span>
                            <b className="musicSinger"> - 歌手</b>
                            <i className="closeMusic">×</i>
                        </li>
                        <li>
                            <span className="musicName">歌名歌名111</span>
                            <b className="musicSinger"> - 歌手1111</b>
                            <i className="closeMusic">×</i>
                        </li>
                        <li>
                            <span className="musicName">歌名歌名</span>
                            <b className="musicSinger"> - 歌手</b>
                            <i className="closeMusic">×</i>
                        </li>
                        <li>
                            <span className="musicName">歌名歌名111</span>
                            <b className="musicSinger"> - 歌手1111</b>
                            <i className="closeMusic">×</i>
                        </li>
                        <li>
                            <span className="musicName">歌名歌名</span>
                            <b className="musicSinger"> - 歌手</b>
                            <i className="closeMusic">×</i>
                        </li>
                        <li>
                            <span className="musicName">歌名歌名111</span>
                            <b className="musicSinger"> - 歌手1111</b>
                            <i className="closeMusic">×</i>
                        </li>
                        <li>
                            <span className="musicName">歌名歌名</span>
                            <b className="musicSinger"> - 歌手</b>
                            <i className="closeMusic">×</i>
                        </li>
                        <li>
                            <span className="musicName">歌名歌名111</span>
                            <b className="musicSinger"> - 歌手1111</b>
                            <i className="closeMusic">×</i>
                        </li>
                        <li>
                            <span className="musicName">歌名歌名111</span>
                            <b className="musicSinger"> - 歌手1111</b>
                            <i className="closeMusic">×</i>
                        </li>
                        <li>
                            <span className="musicName">歌名歌名111</span>
                            <b className="musicSinger"> - 歌手1111</b>
                            <i className="closeMusic">×</i>
                        </li>
                    </ul>
                </div>
                <div className="musicListMask" style={this.state.showListMask} onClick={this.hideListMask}></div>
            </div>
        )
    }
}