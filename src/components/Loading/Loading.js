import React from 'react';
import './index.less';
export default class Loading extends React.Component {
  render(){
    return (
      <div className='loader loader--spinningDisc'></div>
    )
  }
}