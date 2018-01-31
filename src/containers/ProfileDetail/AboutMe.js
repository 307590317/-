import React from 'react';
import avatar from "./images/avator.png";
export default class AboutMe extends React.Component {
  render(){
    return (
        <div className="profile-detail-aboutMe">
          <div className="util">
            <h5><i></i>个人信息</h5>
            <div>
              <p><span>等级：</span><span>Lv7</span></p>
              <p><span>性别：</span><span>男</span></p>
              <p><span>年龄：</span><span>Lv7</span></p>
              <p><span>地区：</span><span>Lv7</span></p>
            </div>
          </div>
          <div className="util">
            <h5><i></i>个人简介</h5>
            <div>
              <p>还没有填写个人简介</p>
            </div>
          </div>
          <div className="util aboutMe-comment">
            <h5><i></i>我的评论<span>(尽自己可见，可在个人设置中修改)</span></h5>
            <div>
              <div className="item">
                <img src={avatar} alt=""/>
                <p className="musicName" >单曲</p>
              </div>
              <h4>自己可见，可在个人设置中修</h4>
              <p>2014/04/23</p>
            </div>
          </div>
        </div>
    )
  }
}