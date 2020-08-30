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
  const [itemarr, setitemarr] = useState([]);
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
    if (props.blog.curSlimit == 'id') {
      dispatch({
        type: 'blog/getItem',
        payload: {
          page: props.blog.curpage,
          limit: 10,
        },
      });
    } else {
    }
  }, [props.blog.curpage]);
  const itemArr = blogItemArr
    ? blogItemArr.map((el, i) => (
        <CSSTransition key={el.id} timeout={500} classNames="item">
          <Item artic={el}></Item>
        </CSSTransition>
      ))
    : [];
  return (
    <div className="item-box" id="a">
      <div className="every-Day" style={{ color: color }}>
        <p>
          <NotificationOutlined spin={false} /> 每日一句
        </p>
        <span>不去追逐，永远不会拥有。不往前走，永远原地停留。</span>
      </div>
      {/* <h1>blog日记（80）</h1> */}
      <TransitionGroup>{itemArr}</TransitionGroup>
      <div className="pgg">
        <Pagination
          defaultCurrent={1}
          total={props.blog.totle}
          defaultPageSize={10}
          onChange={data => {
            dispatch({
              type: 'blog/saveCurPage',
              payload: data,
            });
          }}
        />
      </div>
    </div>
  );
}
export default connect(blog => blog)(articItemBox);
