import React from 'react';

let videos = require('./video');

export default class HomeVideo extends React.Component {
    constructor() {
        super();
        this.state = {id: '', flag: false}
    }

    render() {
        console.log(this.state);
        return <div className="home-video">
            {/*<HomeTop/>*/}
            <ul>
                {videos.map((item, index) => (
                    <li key={index}>
                        <div className='top'>

                            <div className='left'>
                                <div className='image'>
                                    <img src="http://img5.imgtn.bdimg.com/it/u=3146881614,1057685501&fm=27&gp=0.jpg"
                                         alt=""/>

                                </div>
                                <span>抖音短视频</span>
                            </div>

                            <span className='right'>
                                 <span>电音</span>
                             </span>

                            <div className='video'>
                                <video src={item.video}
                                       style={{width: '100%'}}
                                       className='audio' onClick={()=>{
                                    let video = document.getElementsByClassName('audio')[index];
                                    this.setState({id:index,flag: !this.state.flag});
                                    video.pause();
                                }}>
                                </video>
                                <i className='iconfont icon-bofang2'
                                   style={{display: (this.state.flag&&this.state.id===index) ? 'none' : 'block'}}  onClick={()=>{
                                    let video = document.getElementsByClassName('audio')[index];
                                    this.setState({id:index,flag: !this.state.flag});
                                    video.play();
                                }} ></i>
                            </div>


                            <span className='left-bot'>
                                  <i className='iconfont icon-shipin'></i>
                                 <span>
                                    60万
                                 </span>
                             </span>

                            <span className='right-bot'>
                                  <i className='iconfont icon-PCbofangye_paihangbang'></i>
                                 <span>
                                   12:09
                                 </span>
                             </span>
                        </div>
                        <div className="bottom">
                            <p>{item.title}</p>
                            <ul className='logo'>
                                <li>
                                    <i className='iconfont icon-zan'></i>
                                    <span>123</span>
                                </li>
                                <li>
                                    <i className='iconfont icon-buoumaotubiao48'></i>
                                    <span>123</span>
                                </li>
                                <li>
                                    <i className='iconfont icon-diandiandianshu'></i>
                                </li>
                            </ul>
                        </div>
                    </li>
                ))}

            </ul>


        </div>
    }
}
