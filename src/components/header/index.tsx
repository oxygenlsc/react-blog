import React from 'react';
import { Link, NavLink } from 'umi';
import {
  HomeFilled,
  RedditCircleFilled,
  FileImageFilled,
  FlagFilled,
  SoundFilled,
  DingtalkSquareFilled,
} from '@ant-design/icons';
import { Row, Col, Tooltip, Menu } from 'antd';
import Logo from '../../assets/imgs/logo.jpg';
import './index.less';
import { connect } from 'dva';

function Index(props: any) {
  const { dispatch } = props;
  return (
    <div className="header-wrapper">
      <div className="header-box">
        <Row>
          <Col span={10}>
            <Tooltip title={MyNameDes()} placement="left">
              <div className="Logo-box" id="Logo-box">
                <i></i>
                <span>Oxygenの博客</span>
                <i></i>
              </div>
            </Tooltip>
          </Col>
          <Col span={14}>
            <div className="link-box">
              <NavLink
                to="/"
                exact
                className="base-link"
                onClick={() => {
                  dispatch({
                    type: 'blog/saveType',
                    payload: 'id',
                  });
                  dispatch({
                    type: 'blog/getItem',
                    payload: {
                      page: props.blog.curpage,
                      limit: 10,
                    },
                  });
                }}
              >
                <HomeFilled />
                &nbsp;
                <span>首页</span>
              </NavLink>
              {/* <NavLink to="/a">
                <RedditCircleFilled />
                &nbsp;
                <span>关于我</span>
              </NavLink> */}
              <NavLink to="/Map">
                <FileImageFilled />
                &nbsp;
                <span>Map</span>
              </NavLink>
              <NavLink to="/FriendLink">
                <FlagFilled />
                &nbsp;
                <span>友链</span>
              </NavLink>
              {/* <NavLink to="/f">
                <SoundFilled />
                &nbsp;
                <span>留言板</span>
              </NavLink> */}
              <a href="http://oxygen.cool:12306/" target="black">
                <DingtalkSquareFilled />
                &nbsp;
                <span>OldBlog</span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className="Logo">
        <img src={Logo} alt="" />
      </div> */}
      <div className="mobile-box">
        <div className="mobile-title">Oxygenの博客</div>
      </div>
    </div>
  );
}
const MyNameDes = () => {
  return <div className="name-des">我希望拥有像氧气一样の重要性....</div>;
};
export default connect(blog => blog)(Index);
