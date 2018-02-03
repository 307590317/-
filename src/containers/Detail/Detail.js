import React from 'react';
import './index.less';
import {Link, NavLink} from 'react-router-dom';
import circle from './img/circle.png';
import mPoint from './img/mPoint.png';
import e from './img/play_disc.png';
import f from './img/singer-d.png';
import {connect} from 'react-redux';
import {getMP3} from "../../api/zsq";
import 'babel-polyfill';
import actions from '../../store/actions/comment';

@connect(state => ({...state.commentReducer}), actions)
export default class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            flag: true,
            flag1: true,
            flag2: 1,
            showDownload1: {display: 'block'},
            showDownload2: {display: 'none'},
            appear: {display: 'none'},
            showMusicList: {display: 'none'},
            showListMask: {display: 'none'},
            playStyle: 1,
            url: null, //歌曲地址
            playStatus: false,//播放状态
            nowTime:'00:00',
            detailPageHide:true,//控制detail隐藏或者显示
        }
    }


    async componentDidMount() {
        let result = await getMP3(this.props.match.params.id);
        let url = result.data[0].url;
        this.setState({url});
        this.props.getSongDetailAPI(this.props.match.params.id);

        this.$runline = this.refs.runline;
        /*默认线*/
        this.$runBtn = this.refs.runBtn;
        /*播放滚动按钮*/
        this.$playLine = this.refs.playLine;
        /*播放线*/
    }


    /*点击切换类名  //点击切换字体图标*/
    changeClass = () => {
        this.setState({flag: !this.state.flag});
    };

    contorlPlayState = () => {
        this.setState({playStatus: !this.state.playStatus, flag1: !this.state.flag1});
        if (this.state.playStatus) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    };
    //计算已经播放时间
    computedAlready = () => {
        this.audio = document.getElementById('audio');
        this.duration = this.audio.duration;
        let currentTime = this.audio.currentTime;
        this.speed = parseFloat(240 / this.duration);
        if (currentTime >= this.duration) {//超出播放时间
            clearInterval(autoTimer);
            this.already = this.formatTime(this.duration);//时间
            this.$playLine.style.width = 240 + 'px';
            this.$playLine.className = '';
            this.$runBtn.style.left = 230 + 'px';
            this.$runBtn.className = '';
            return;
        }
        //控制进度
        //小于总时间
        this.timestamp = this.formatTime(this.duration);//总时间
        this.already = this.formatTime(currentTime);//已经播放时间
        this.$playLine.style.width = this.speed * currentTime + 'px';
        this.$runBtn.style.left = this.speed * currentTime + 'px';
        this.nowTime=this.formatTime(this.audio.currentTime*1000);

        let nowTime=this.audio.currentTime;
        let minutes = Math.floor(nowTime / 60);
        let seconds = Math.floor(nowTime - (minutes * 60));
        seconds < 10 ? seconds = '0' + seconds : null;
        minutes < 10 ? minutes = '0' + minutes : null;
        this.state.nowTime = minutes + ':' + seconds;
        this.setState({
            nowTime:this.state.nowTime
        });
    };

    //格式化时间
    formatTime = (time) => {
        let songs = this.props.songs;
        let getMusicTime = this.props.songs[0].dt;
        let dt = getMusicTime / 1000;
        let minutes = Math.floor(dt / 60);
        let seconds = Math.floor(dt - (minutes * 60));
        seconds < 10 ? seconds = '0' + seconds : null;
        minutes < 10 ? minutes = '0' + minutes : null;
        let timestamp = minutes + ':' + seconds;// 05:08
        return timestamp;
    };

    //控制进度
    musicPlayHandle = () => {
        if (!this.audio.paused) {
            //播放
            this.audio.play();
            this.autoTimer = setInterval(this.computedAlready, 1000);
            return;
        }
        clearInterval(this.autoTimer);
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
    this.timer = setTimeout(() => {
      this.setState({appear: {display: 'none'}});
    }, 3000)
  };

  showDownloadMask = () => {
    this.setState({showDownload1: {display: 'block'}, showDownload2: {display: 'block'}});
  };

  changePlayState = () => {
    this.setState({appear: {display: 'block'}});
    if (this.state.playStyle <= 3) {
      this.setState({playStyle: this.state.playStyle + 1});
      if (this.state.playStyle === 3) {
        this.setState({playStyle: 1});
      }
    }
  };

  hideMask = () => {
    this.setState({showDownload1: {display: 'none'}, showDownload2: {display: 'none'}});
  };

  showMusicList = () => {
    this.setState({showMusicList: {display: 'block'}, showListMask: {display: 'block'}});
  };

  hideListMask = () => {
    this.setState({showListMask: {display: 'none'}, showMusicList: {display: 'none'}})
  };
  lastSong = async () => {
    this.props.history.push(`/detail/${parseInt(this.props.match.params.id) - 1}`);
    let result = await getMP3(this.props.history.location.pathname.slice(9));
    let url = result.data[0].url;
    this.setState({url});
    this.props.getSongDetailAPI(this.props.history.location.pathname.slice(9));
}
nextSong = async () => {
    this.props.history.push(`/detail/${parseInt(this.props.match.params.id) + 1}`);
    let result = await getMP3(this.props.history.location.pathname.slice(9));
    let url = result.data[0].url;
    this.setState({url});
    this.props.getSongDetailAPI(this.props.history.location.pathname.slice(9));
};
    //隐藏详情页
    detailPageHide=()=>{
        this.setState({
            detailPageHide:!this.state.detailPageHide
        })
    };

    render() {
        let songs = this.props.songs;

        return (
            <div className={this.state.detailPageHide?"detail":"detail detailHide"}>
                <audio src={this.state.url} autoPlay={'autoPlay'} id="audio"
                       onLoadedData={this.musicPlayHandle} ref={x=>{this.audio=x}}></audio>
                <div className="detailHeader">
                    <i className="back iconfont icon-fanhui"></i>
                    <div className="musicName">
                        <span className="name">{songs[0].name}</span>
                        <span className="singer">{songs[0].ar[0].name}</span>
                    </div>
                    <i className="share iconfont icon-fenxiang"></i>
                </div>
                <div className="detailBody">
                    <div className="imgDetailBox">
                        <img src={circle} className="img-c"/>
                        <img src={mPoint} className={this.state.flag1 ? "img-d pointStopRun" : "img-d pointRun"}/>
                        <img src={e} className={this.state.flag1 ? "img-e CDRun" : "img-e"}/>
                        <img src={songs[0].al.picUrl} className={this.state.flag1 ? "img-f CDRun" : "img-f"}/>
                        <div className="runCircle"></div>
                    </div>
                    <div className="btn">
                        {/*点击之前className：icon-aixin   点击之后：icon-xin*/}
                        <i className={this.state.flag ? "like iconfont icon-aixin" : "like iconfont icon-xin"}
                           onClick={this.changeClass}></i>
                        <i className="download iconfont icon-download" onClick={this.showDownloadMask}></i>
                        <NavLink to='/comment'><i className="comment-btn iconfont icon-pinglun" onClick={this.detailPageHide}></i></NavLink>
                        <i className="details iconfont icon-101"></i>
                    </div>
                    <div className="progress">
                        <span className="already">{this.state.nowTime}</span>
                        <div className="timeLine">
                            <div ref="runline" className="run">{/*默认线*/}
                                <div className="playLine" ref="playLine">{/*播放线*/}
                                    <div className="runBtn" ref="runBtn">{/*按钮*/}
                                        <div className="dot"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="total">{this.formatTime(200)}</span>
                    </div>
                </div>
                <div className="detailFooter">
                    <i className={this.state.flag2 == 1 ? "goBack iconfont icon-fanhui11" : (this.state.flag2 == 2 ? "goBack iconfont icon-suijibofang" : "goBack iconfont icon-danquxunhuan")}
                       onClick={() => {
                           this.changeClassName()
                       }}
                    >
                        <span className="playMask"
                              style={this.state.appear}>{this.state.flag2 == 1 ? "循环播放" : (this.state.flag2 == 2 ? "随机播放" : "单曲循环")}</span>
                    </i>
                    <i className="playLeft iconfont icon-zuobofang"></i>
                    <i className={this.state.flag1 ? "curMusicPlay iconfont icon-bofang1" : "curMusicPlay iconfont icon-bofang11"}
                       onClick={() => {
                           this.contorlPlayState();
                           this.musicPlayHandle();
                       }}></i>
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

                <div className="musicdList" style={this.state.showMusicList}>
          <div className="musicdListHeader clearfix">
            <ul>
              <li>
                <i
                  className={this.state.playStyle == 1 ? "goBack iconfont icon-fanhui11" : (this.state.playStyle == 2 ? "goBack iconfont icon-suijibofang" : "goBack iconfont icon-danquxunhuan")}
                  onClick={this.changePlayState}></i>
              </li>
              <li>{this.state.playStyle == 1 ? "循环播放" : (this.state.playStyle == 2 ? "随机播放" : "单曲循环")}</li>
              <li>(90)</li>
              <li><i className="iconfont icon-dustbin_icon"></i></li>
              <li>收藏全部</li>
              <li><i className="iconfont icon-shoucang1"></i></li>
            </ul>
          </div>
          <ul className="musicdLists">
            <li>
              <span className="musicName">你要的全拿走</span>
              <b className="musicSinger"> - 胡彦斌</b>
              <i className="closeMusic">×</i>
            </li>
            <li>
              <span className="musicName">远走高飞</span>
              <b className="musicSinger"> - 金志文</b>
              <i className="closeMusic">×</i>
            </li>
            <li>
              <span className="musicName">差一步</span>
              <b className="musicSinger"> - 大壮</b>
              <i className="closeMusic">×</i>
            </li>
            <li>
              <span className="musicName">成都</span>
              <b className="musicSinger"> - 赵雷</b>
              <i className="closeMusic">×</i>
            </li>
            <li>
              <span className="musicName">醉赤壁</span>
              <b className="musicSinger"> - 林俊杰</b>
              <i className="closeMusic">×</i>
            </li>
            <li>
              <span className="musicName">带你去旅行</span>
              <b className="musicSinger"> - 校长</b>
              <i className="closeMusic">×</i>
            </li>
            <li>
              <span className="musicName">文爱</span>
              <b className="musicSinger"> - CG</b>
              <i className="closeMusic">×</i>
            </li>
            <li>
              <span className="musicName">晴天</span>
              <b className="musicSinger"> - 周杰伦</b>
              <i className="closeMusic">×</i>
            </li>
            <li>
              <span className="musicName">Psycho</span>
              <b className="musicSinger"> - Russ</b>
              <i className="closeMusic">×</i>
            </li>
            <li>
              <span className="musicName">说散就散</span>
              <b className="musicSinger"> - JC</b>
              <i className="closeMusic">×</i>
            </li>
            <li>
              <span className="musicName">Time</span>
              <b className="musicSinger"> - MKJ</b>
              <i className="closeMusic">×</i>
            </li>
          </ul>
        </div>
        <div className="musicListMask" style={this.state.showListMask} onClick={this.hideListMask}></div>
      </div>
    )
  }
}
