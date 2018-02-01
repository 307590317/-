import React,{Component} from 'react';
import a from './img/4.jpg'
import './index.less'
export default class LoadMoreThing extends Component{
    render(){
    return (
        <div className="play-friend-dynamic-LoadMoreThing">
            <div  className="content-container">
                <a href="javascript:;" className="click-goto-another-video">
                    <img src={a} alt="" className="source-container"/>
                    <p className="audio-title">哇！这个台湾有细化的团队做的视频还是贼逗！大晚上的笑出声，哈哈哈啊哈</p>
                    <p className="time-userwrite-container">
                        <span className="audio-time">00:24,</span>
                        <span className="write-something-youwant">我是牛逼的嘻哈女孩</span>
                    </p>

                </a>

            </div>
        </div>
       );
    }
}