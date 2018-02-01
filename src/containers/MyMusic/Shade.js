import React from 'react';

export default class Shade extends React.Component {

  constructor() {
    super();
    this.state = {disappear: false}
  }

  cancelPopUp = (e) => {
    switch (e.target.tagName.toLowerCase()){
      case 'ul':
      case 'li':
      case 'span':
      case 'i':
        return;
    }
    this.setState({disappear: !this.state.disappear});
  };

  render() {
    return (
      <div>
        {!this.state.disappear?
          <div className='layer-right' onClick={this.cancelPopUp}>
          <ul className='popup'>
            <li className='special'>
              <span>我创建的歌单(2)</span>
            </li>
            <li>
              <i></i>
              <span>新建歌单</span>
            </li>
            <li>
              <i></i>
              <span>管理歌单歌单</span>
            </li>
          </ul>
        </div> : null}
      </div>

    )
  }
}

