import React from 'react';
import './index.less'
import Around from "./Around/Around";
import Dynamic from "./Dynamic/Dynamic";
import {Link} from 'react-router-dom'

export default class Friend extends React.Component {
    constructor(props) {
        super(props);
         this.state={check:true}
    }

    handleCheck=()=>{
        console.log(1);
        setTimeout(()=>{
            this.setState({check:!this.state.check});
        },300)
    };
    render() {
        return (
            <div>
                <nav className="friend-nav">

                    <div className="iconfont icon-yaoqinghaoyou"></div>
                    <div onClick={()=>{
                        console.log(this.state.checked,2);
                        this.handleCheck()}} className={this.state.check?"switch checked":"switch"} >
                        <li className="switch-right-nav" >
                            动态
                        </li>
                        <li className="switch-left-nav">
                            附近
                        </li>


                    </div>
                    <div className=" iconfont icon-music"></div>
                </nav>
                <nav>
                    <div>
                        <Link to={'/login'}>
                                发动态
                        </Link>
                    </div>
                    <div>
                        <Link to={'/login'}>
                            发视频
                        </Link>
                    </div>
                </nav>
            </div>

        )
    }
}