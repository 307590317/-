import React from 'react';
import './index.less'
import {NavLink} from 'react-router-dom'
import a from "./img/1.jpg"
export default class Nearby extends React.Component {
  render(){
    return (
        <div>
            <div className="header">
                <NavLink className="img-content" to={"/xxx"}>
                    <img src={a} alt=""/>
                </NavLink>
                <NavLink className="title-content" to={"/xxx"}>
                    <span>vdjsabf</span>
                </NavLink>
                <NavLink  className="location-content" to={"/xxx"}>
                    <span>
                        <span className="location-symbol">＋</span>
                        <span className="show-logo">bvaibvudsi 110km</span>
                        <span className="show-distance">110m</span>
                    </span>
                </NavLink>

            </div>
        </div>
    )
  }
}