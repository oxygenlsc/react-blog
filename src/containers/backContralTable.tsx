import React, { useState, useEffect } from 'react';
import './style/index.less';
import { Table, Tag, Space, Button } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import { history } from 'umi';
function backContralTable(props: any) {
  const [limit, setlimit] = useState({
    page: 1,
    limit: 10,
  });
  const { dispatch } = props;
  useEffect(() => {
    dispatch({
      type: 'background/backgroundGetItem',
      payload: limit,
    });
  }, []);
  const columns = [
    {
      title: '标题',
      dataIndex: 'Btitle',
      key: 'Btitle',
      render: text => <a>{text}</a>,
    },
    {
      title: '作者',
      dataIndex: 'Bauthor',
      key: 'Bauthor',
      render: text => <a>{text}</a>,
    },
    {
      title: '标签',
      key: 'Btags',
      dataIndex: 'Btags',
      render: text => <a>{text}</a>,
    },
    {
      title: '查看',
      key: 'Bview',
      dataIndex: 'Bview',
      render: text => <a>{text ? text : 0}</a>,
    },
    {
      title: '点赞',
      key: 'Blike',
      dataIndex: 'Blike',
      render: text => <a>{text ? text : 0}</a>,
    },
    {
      title: '最后更新时间',
      key: 'updatedAt',
      dataIndex: 'updatedAt',
      render: text => (
        <a>{moment(text).format(`YYYY年MM月DD日 hh时mm分ss秒 `)}</a>
      ),
    },
    {
      title: '更新文章',
      key: 'update',
      render: record => (
        <Space size="small">
          <Button
            type="ghost"
            onClick={e => {
              history.push({
                pathname: '/edit',
                query: {
                  blogid: record.id,
                },
              });
            }}
          >
            修改
          </Button>
        </Space>
      ),
    },
    {
      title: '删除文章',
      key: 'delete',
      render: () => (
        <Space size="small">
          <Button type="ghost">删除</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="table-box">
      <Table
        columns={columns}
        dataSource={
          props.background.backgroundBlog ? props.background.backgroundBlog : ''
        }
        pagination
      ></Table>
    </div>
  );
}

export default connect(background => background)(backContralTable);
