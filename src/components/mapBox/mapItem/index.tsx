import React from 'react';
import '../index.less';
import moment from 'moment';
import { Link, NavLink } from 'umi';
export default function MapItem(props: any) {
  return (
    <div
      className={props.type == 'left' ? 'map-item-box-left' : 'map-item-box'}
      style={{
        animation:
          props.type == 'left'
            ? `lefts 1s ${props.i}s  cubic-bezier(0.73, 0.14, 0.28, 1.32)  forwards`
            : `rights 1s  ${props.i}s cubic-bezier(0.73, 0.14, 0.28, 1.32) forwards`,
        top: props.top,
      }}
    >
      <div className="map-b-title">
        <Link to={`/articDetail?id=${props?.data?.id}`}>
          标题：{props?.data?.Btitle}
        </Link>
        <div className="map-b-time">
          发布时间：{moment(props?.data?.updatedAt).format('YYYY年 MM月 DD日')}
        </div>
        <div className="map-b-Tag">标签：{props?.data?.Btags}</div>
      </div>
    </div>
  );
}
