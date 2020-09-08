import React from 'react';
import './common.less';
export default function LinkItem(props) {
  return (
    <div
      className="link-item-box"
      style={{
        width: '200px',
        height: props.height,
        backgroundColor: props.bgC,
      }}
    >
      <div className="link-title">
        <img src={'https://favicon.link/' + props.itemMsg.Linkurl} alt="" />
        <a href={props.itemMsg.Linkurl} target="black">
          {props.itemMsg.Linkname}
        </a>
      </div>
      <div className="link-des">{props.itemMsg.Webdesc}</div>
    </div>
  );
}
