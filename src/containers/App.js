import React from 'react';
import Tab from "../components/Tab/Tab";
import 'babel-polyfill';
import Detail from "./Detail/Detail";
export default class App extends React.Component {
  render(){
      return (
        <div>
          {this.props.children}
          <Detail/>
          <Tab/>
        </div>
    )
  }
}