import React from 'react';
import '@/assets/style/articdetail.less';
export default function ArticDetail(props) {
  return (
    <div className="detail-content">
      <div className="left-btn-box"></div>
      <div className="middle-article"></div>
      <div className="right-menu">
        <div className="author-box">
          <h3>关于作者</h3>
          <div>
            <p>oxygen</p>
            <p>获得点赞 49</p>
            <p>阅读量</p>
          </div>
        </div>
        <ul className="menu-box">
          <li>
            <a href="#标题1">标题1</a>
          </li>
          <li>
            <a href="#标题2">标题2</a>
          </li>
          <li>
            <a href="#标题3">标题3</a>
          </li>
          <li>
            <a href="#标题4">标题4</a>
          </li>
          <li>
            <a href="#标题5">标题5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
