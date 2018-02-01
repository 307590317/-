import React,{Component} from 'react';
import './index.less'
export default class TitelInFriendDynamic extends Component{
    render(){
    return (
        <div>
            <div className="relative-commend-title">
                <span className="relative-commend-title-container">
                    {this.props.children}
            </span>
            </div>
        </div>
    );
    }

}
