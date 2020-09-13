import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import $ from 'jquery';
import './index.less';
import LoginForm from './fromCmp';
import { connect } from 'dva';
import { CookieDo } from '@/utils/util';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Index(props: any) {
  const { history, dispatch } = props;
  useEffect(() => {
    bind();
  }, []);
  const ToRouteIndex = async (vals: any) => {
    const data = Object.values(vals);
    const sendData = {
      LoginId: data[0],
      LoginPwd: data[1],
    };
    const result = await dispatch({
      type: 'login/ToLogin',
      payload: sendData,
    });
    const jujeres = result.data;
    console.log();
    if (jujeres.success) {
      history.push('/edit');
      message.success('登录成功');
      // CookieDo.set('loginSuccess', true, '20m');
    } else {
      message.error('请输入正确的账号密码');
    }
  };
  const falseCountAndPw = errors => {};

  const bind = () => {
    var box = $('#anglebox');
    var body = $('.Login-wrapper');
    let rox = 0,
      roy = 0,
      disx = 0,
      disy = 0;
    var timer = null;
    body
      .on('mousedown', function(e) {
        var enx = e.clientX;
        var eny = e.clientY;
        body.on('mousemove', function(e) {
          var nowx = e.clientX;
          var nowy = e.clientY;
          disx = nowx - enx;
          disy = nowy - eny;
          rox -= disy * 0.2;
          roy += disx * 0.2;
          rox = rox % 360;
          roy = roy % 360;
          box.css({
            transform: 'rotateX(' + rox + 'deg) rotateY(' + roy + 'deg) ',
          });
          enx = nowx;
          eny = nowy;
          //旋转
        });

        return false;
      })
      .on('mouseup', function() {
        //缓冲
        body.off('mousemove');
        timer = setInterval(function() {
          disx *= 0.95;
          disy *= 0.95;
          rox -= disy * 0.5;
          roy += disx * 0.5;
          rox = rox % 360;
          roy = roy % 360;
          box.css({
            transform: 'rotateX(' + rox + 'deg) rotateY(' + roy + 'deg) ',
          });
          if (Math.abs(disx) < 0.01 && Math.abs(disy) < 0.01) {
            clearInterval(timer);
          }
        }, 20);
      });
  };

  return (
    <div className="Login-wrapper">
      <div id="anglebox">
        <div className="login-box" id="login0">
          <LoginForm
            Clabel={'账号'}
            name="chinese"
            Plabel="密码"
            btnName="提交"
            warnBody="请输入你的"
            index="1"
            success={ToRouteIndex}
            fail={falseCountAndPw}
          />
        </div>
        <div className="login-box" id="login1">
          <LoginForm
            Clabel="Username"
            name="english"
            Plabel="Password"
            btnName="Submit"
            warnBody="Please input your"
            index="2"
            success={ToRouteIndex}
            fail={falseCountAndPw}
          />
        </div>
        <div className="login-box" id="login2">
          <LoginForm
            Clabel="アカウント"
            name="japan"
            Plabel="パスワード"
            btnName="情報を提出する"
            warnBody="あなたのを入力してください"
            index="3"
            success={ToRouteIndex}
            fail={falseCountAndPw}
          />
        </div>
      </div>
    </div>
  );
}

export default connect()(Index);
