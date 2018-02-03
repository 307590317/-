import React from 'react';
import HomeTop from "./HomeTop";

export default class HomeVideo extends React.Component {
    render() {
        return <div className="home-video">
            {/*<HomeTop/>*/}
            <ul>
                <li>
                    <div className='top'>

                        <div className='left'>
                            <div className='image'>
                                <img src="http://img5.imgtn.bdimg.com/it/u=3146881614,1057685501&fm=27&gp=0.jpg" alt=""/>

                            </div>
                            <span>抖音短视频</span>
                        </div>

                        <span className='right'>
                                 <span>电音</span>
                             </span>

                        <img src="http://img1.imgtn.bdimg.com/it/u=2916390227,3292952952&fm=11&gp=0.jpg"
                             className='video'>

                        </img>

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
                        <p>u过再见还能红着眼是否还能哄着了那个</p>
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
            </ul>


        </div>
    }
}
