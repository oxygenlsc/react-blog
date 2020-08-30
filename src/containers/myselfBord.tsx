import React, { useState, useEffect } from 'react';
import MySelfBord from '../components/rightMySelf';
import './common.less';
import { connect } from 'dva';
function MyselfBord(props: any) {
  const { TagArr } = props.tag;
  const { dispatch } = props;
  useEffect(() => {
    dispatch({
      type: 'tag/getTag',
      payload: '',
    });
  }, []);
  return (
    <div className="my-self-box">
      <MySelfBord
        TagArr={TagArr}
        tagClick={tag => {
          const senddata = {
            type: 'tag',
            tag: tag,
            limit: 10,
            page: props.blog.curpage,
          };
          dispatch({
            type: 'blog/saveType',
            payload: tag,
          });
          dispatch({
            type: 'blog/getDetail',
            payload: senddata,
          });
        }}
      ></MySelfBord>
    </div>
  );
}
export default connect(blog => blog)(
  connect(tag => {
    return tag;
  })(MyselfBord),
);
