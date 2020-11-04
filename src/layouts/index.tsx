import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Login from '@/components/login';
import { getRandom } from '@/utils/util';
import { L2Dwidget } from 'live2d-widget';
import { CookieDo } from '@/utils/util';
import Bg from '../components/background';
import { connect } from 'dva';
import { Spin } from 'antd';
import { LoadingOutlined, SmileOutlined } from '@ant-design/icons';

function Index(props: any) {
  useEffect(() => {
    let url = '';
    switch (getRandom(1, 5)) {
      case 1:
        url =
          'https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json';
        break;
      case 2:
        url =
          'https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json';
        break;
      case 3:
        url =
          'https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json';
        break;
      case 4:
        url =
          'https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json';
        break;
      case 5:
        url =
          'https://unpkg.com/live2d-widget-model-unitychan@1.0.5/assets/unitychan.model.json';
        break;
      case 7:
        break;
      default:
        break;
    }

    L2Dwidget.on('*', (name: any) => {}).init({
      model: {
        jsonPath: url,
        scale: 1,
      },
      dialog: {
        // 开启对话框
        enable: true,
        script: {
          'hover #live2dcanvas': '星星在天上而你在我心里 (*/ω＼*)',
          'tap body': '哎呀！别碰我！',
          'tap face': '人家已经不是小孩子了！',
        },
      },
      display: {
        position: 'left',
        width: 150,
        height: 200,
        hOffset: 20,
        vOffset: 10,
      },
      mobile: {
        show: true,
        scale: 1,
      },
      react: {
        opacityDefault: 0.5,
        opacityOnHover: 1,
      },
    });
  }, []);
  const isJump = path => {
    const data = CookieDo.get('loginSuccess');
    if (path == '/login' && data) {
      props.history.push('/edit');
      // return <>{props.children}</>;
    }
    if (path.includes('/edit')) {
      if (data) {
        return <>{props.children}</>;
      } else {
        props.history.push('/login');
      }
    }
  };
  if (props.location.pathname === '/login') {
    isJump(props.location.pathname);
    return (
      <>
        <Bg></Bg>
        <Login {...props}></Login>
      </>
    );
  }
  if (props.location.pathname.includes('/edit')) {
    isJump(props.location.pathname);
    return <>{props.children}</>;
  }

  return (
    <div>
      <Bg></Bg>
      <Header />
      <Spin
        spinning={props.global}
        indicator={
          <SmileOutlined style={{ fontSize: 100, color: '#f80' }} spin />
        }
      >
        <div className="body-content">{props.children}</div>
      </Spin>
      <div className="mobile-content">
        <div className="msg-box">
          mobile 页面博主不想写拉 等有时间再写吧，所以打开你的
          电脑来看看吧。。。
        </div>
      </div>
      {/* {props.children} */}
    </div>
  );
}
export default connect(({ loading }) => loading)(Index);
