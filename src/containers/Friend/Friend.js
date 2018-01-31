import React,{Component} from 'react';
import Dynamic from './Dynamic/Dynamic'
import Around from "./Around/Around";
export default class Friend extends Component{
    render(){
    return (
        <div>
            <Dynamic/>
            <Around/>
        </div>
    );
    }

}
