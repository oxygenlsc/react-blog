import React, { useEffect, useState } from 'react';
import {
  CalendarTwoTone,
  TagTwoTone,
  FireTwoTone,
  LikeTwoTone,
} from '@ant-design/icons';
import './index.less';
import { itemProps } from '@/utils/tsConfig/interface';
import { Link, NavLink } from 'umi';
export default function Index(props?: itemProps) {
  return (
    <div className="item-wrapper" id="itemDom">
      <div className="title">
        <Link to={`/articDetail?id=${props.artic.id}`}>
          {props.artic.Btitle}
        </Link>
      </div>
      <div className="des">
        <div className="time">
          <CalendarTwoTone twoToneColor="#eb2f96" />:{props.artic.updatedAt}
        </div>
        <div className="tag">
          <TagTwoTone twoToneColor="#52c41a" />:{props.artic.Btags}
        </div>
        <div className="hot">
          <FireTwoTone twoToneColor="#f80" /> :
          {props.artic.Bview ? props.artic.Bview : 0}{' '}
        </div>
        <div className="goof">
          <LikeTwoTone />:{props.artic.Blike ? props.artic.Blike : 0}
        </div>
      </div>
      <div className="artic-content">{props.artic.Bdesc}</div>
    </div>
  );
}
