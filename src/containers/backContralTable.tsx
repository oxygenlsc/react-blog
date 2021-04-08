import React, { useState, useEffect } from 'react';
import './style/index.less';
import { Table, Tag, Space, Button, Radio, message } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import { history } from 'umi';
function backContralTable(props: any) {
  const [limit, setlimit] = useState({
    page: 1,
    limit: 10,
  });
  const [linkpage, setlinkpage] = useState(1);
  const { dispatch } = props;
  useEffect(() => {
    dispatch({
      type: 'background/backgroundGetItem',
      payload: limit,
    });
  }, [limit]);
  useEffect(() => {
    dispatch({
      type: 'friendlink/selectFriendLinkByPage',
      payload: {
        page: linkpage,
      },
    });
  }, [linkpage]);
  const columns = [
    {
      title: '标题',
      dataIndex: 'Btitle',
      key: 'Btitle',
    },
    {
      title: '作者',
      dataIndex: 'Bauthor',
      key: 'Bauthor',
    },
    {
      title: '标签',
      key: 'Btags',
      dataIndex: 'Btags',
    },
    {
      title: '查看',
      key: 'Bview',
      dataIndex: 'Bview',
      render: text => <span>{text ? text : 0}</span>,
    },
    {
      title: '点赞',
      key: 'Blike',
      dataIndex: 'Blike',
      render: text => <span>{text ? text : 0}</span>,
    },
    {
      title: '最后更新时间',
      key: 'updatedAt',
      dataIndex: 'updatedAt',
      width: 250,
      render: text => moment(text).format(`YYYY年MM月DD日 hh时mm分ss秒 `),
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
  const friendLinkColumns = [
    {
      title: '站点名字',
      dataIndex: 'Linkname',
      key: 'Linkname',
    },
    {
      title: '邮箱地址',
      dataIndex: 'Emilurl',
      key: 'Emilurl',
    },
    {
      title: '站点地址',
      dataIndex: 'Linkurl',
      key: 'Linkurl',
      render: text => {
        return (
          <a href={text} target="black">
            {text}
          </a>
        );
      },
    },
    {
      title: '站点描述',
      dataIndex: 'Webdesc',
      key: 'Webdesc',
    },
    {
      title: '申请时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 250,
      render: text => moment(text).format(`YYYY年MM月DD日 hh时mm分ss秒 `),
    },
    {
      title: '是否展示',
      dataIndex: 'isShow',
      key: 'isShow',
      render: (text, record) => {
        return (
          <>
            {' '}
            <Radio.Group
              defaultValue={text}
              size="small"
              onChange={e => {
                dispatch({
                  type: 'friendlink/upDateisShow',
                  payload: {
                    isShow: e.target.value,
                    id: record.id,
                  },
                }).then(res => {
                  if (res.success) {
                    message.success(res.msg);
                  } else {
                    message.error(res.msg);
                  }
                });
              }}
            >
              <Radio.Button value={true}>已展示</Radio.Button>
              <Radio.Button value={false}>未展示</Radio.Button>
            </Radio.Group>
          </>
        );
      },
    },
    {
      title: '删除该站点',
      dataIndex: 'delet',
      key: 'delet',
      render: (text, record) => {
        return <Button type="primary">删除</Button>;
      },
    },
  ];

  return (
    <div className="table-box">
      <Table
        scroll={{ y: 400 }}
        columns={columns}
        dataSource={
          props.background.backgroundBlog ? props.background.backgroundBlog : ''
        }
        pagination={{
          onChange: data => {
            setlimit({
              page: data,
              limit: 10,
            });
          },
          total: props.background.backgroundTotle,
        }}
      ></Table>
      <Table
        scroll={{ y: 400 }}
        columns={friendLinkColumns}
        dataSource={
          props.friendlink?.allFriendLink ? props.friendlink.allFriendLink : ''
        }
        pagination={{
          onChange: data => {
            setlinkpage(data);
          },
          total: props.friendlink.friendLinkTotal,
        }}
        // pagination
      ></Table>
    </div>
  );
}

export default connect(({ background, friendlink }) => {
  return { background, friendlink };
})(backContralTable);
