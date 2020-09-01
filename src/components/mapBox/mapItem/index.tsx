import React from 'react';
import '../index.less';
export default function MapItem(props: any) {
  return (
    <div
      className={props.type == 'left' ? 'map-item-box-left' : 'map-item-box'}
      style={{ top: props.top, left: props.left }}
    >
      <div className="map-b-title">
        标题：吃的S
        <div className="map-b-time">发布时间：2020 3月18</div>
        <div className="map-b-Tag">标签：ts</div>
      </div>
    </div>
  );
}
