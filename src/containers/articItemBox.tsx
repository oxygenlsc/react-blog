import React, { useState, useEffect } from 'react';
import Item from '@/components/articItem';
import { NotificationOutlined } from '@ant-design/icons';
import { getRandom } from '@/utils/util';
import { Pagination } from 'antd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'dva';
import './common.less';

function articItemBox(props: any) {
  const { dispatch } = props;
  const { blogItemArr } = props.blog;
  const [itemarr, setitemarr] = useState([
    {
      title: '写死的title',
      view: '10',
      time: '1998-03-99',
      desc:
        '写死的content,写死的content写死的content,写死的content写死的content,写死的content写死的content,写死的content写死的content,写死的content',
      good: 12,
      tag: 'TS',
    },
    {
      title: '写死的title',
      view: '10',
      time: '1998-03-99',
      desc: '写死的content',
      good: 12,
      tag: 'TS',
    },
  ]);
  const [color, setcolor] = useState('rgb(0,0,0)');
  useEffect(() => {
    setInterval(() => {
      const rgb = `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(
        0,
        255,
      )})`;
      setcolor(rgb);
    }, 2000);
  }, []);
  useEffect(() => {
    dispatch({
      type: 'blog/getItem',
      payload: {
        page: 1,
        limit: 10,
      },
    });
  }, []);
  const itemArr = blogItemArr.map((el, i) => (
    <CSSTransition key={el.id} timeout={500} classNames="item">
      <Item artic={el}></Item>
    </CSSTransition>
  ));
  return (
    <div className="item-box" id="a">
      <div className="every-Day" style={{ color: color }}>
        <p>
          {' '}
          <NotificationOutlined spin={false} /> 每日一句
        </p>
        <span>
          生命本就只有一次，为何不好好享受当下生命本就只有一次，为何不好好享受当下生命本就只有一次，为何不好好享受当下生命本就只有一次，为何不好好享受当下
        </span>
      </div>
      {/* <h1>blog日记（80）</h1> */}
      <TransitionGroup>{itemArr}</TransitionGroup>
      <div className="pgg">
        <Pagination defaultCurrent={6} total={20} />
      </div>
    </div>
  );
}
export default connect(blog => blog)(articItemBox);
