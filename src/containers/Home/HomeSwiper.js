import React from 'react';
import ReactSwipe from 'react-swipe';

export default class HomeSwiper extends React.Component {
    constructor(){
        super();
        this.state={index:0}
    }


    render(){
        let opts={continuous: true,auto:2000,callback:(index)=>{
            this.setState({index});//每次循环后将索因 印射在组件上
        }};
        return (
            <div className="home-swiper">
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    {/*{this.props.lists.map((item,index)=>(*/}
                        {/*<div key={index}><a href={item.url}>*/}
                            {/*<img src={item.photoUrl} alt=""/>*/}
                        {/*</a></div>*/}
                    {/*))}*/}
                </ReactSwipe>
                <div className="dots">
                    {/*{this.props.lists.map((item,index)=>(*/}
                        {/*<span className={this.state.index===index?'active':null} key={index}></span>*/}
                    {/*))}*/}
                </div>
            </div>
        )
    }
}
