import React, { useState } from 'react';
import { history } from 'umi';
import './index.less';
import {
  EnvironmentTwoTone,
  MailTwoTone,
  QqCircleFilled,
  WechatFilled,
} from '@ant-design/icons';
import { Divider, Popover } from 'antd';
import { getRandom } from '@/utils/util';
import qq from '@/assets/imgs/qq.jpg';
import wechat from '@/assets/imgs/wechat.jpg';
import logo from '@/assets/imgs/s1.jpg';
import my from '@/assets/imgs/s.jpg';
import ImgBox from './imgbox/ImgBox';
function Index(props) {
  const [img, setimg] = useState(logo);
  const [i, seti] = useState(1);
  const { TagArr } = props;
  const changeHead = e => {
    domRotate(e.target);
    if (img == logo) {
      setimg(my);
    } else {
      setimg(logo);
    }
  };
  const domRotate = dom => {
    dom.style['transform'] = `rotate(${i * 360}deg)`;
    seti(i + 1);
  };
  return (
    <div className="rigt-myself">
      <div className="head">
        <div
          className="img-box"
          onMouseEnter={changeHead}
          onClick={() => {
            history.push('/login');
          }}
        >
          <img src={img} alt="" />
        </div>
        <ul className="my-des">
          <li>Oxygen_小黎</li>
          <li>2019年毕业</li>
          <li>
            <EnvironmentTwoTone />
            :浙江杭州工作(老家四川成都)
          </li>
          <li>前端：React+antd+jquery</li>
          <li>后端：Node+express+sequlize+mysql</li>
          <li>
            <MailTwoTone /> 1260211231@qq.com
          </li>
        </ul>
        <Divider style={{ fontWeight: 'bold' }}>社交账号</Divider>
        <div className="commulition">
          <Popover placement="top" content={<ImgBox src={qq} />}>
            <div className="c-qq">
              <QqCircleFilled />
            </div>
          </Popover>
          <Popover placement="top" content={<ImgBox src={wechat} />}>
            <div className="c-wechat">
              <WechatFilled />
            </div>
          </Popover>
        </div>
      </div>
      <div className="tag">
        {Array.isArray(TagArr) &&
          TagArr.map(el => {
            const color = `rgb(${getRandom(0, 255)},${getRandom(
              0,
              255,
            )},${getRandom(0, 255)})`;
            const fontsize = `${getRandom(15, 25)}px`;
            return (
              <span
                key={el.id}
                style={{ color: color, fontSize: fontsize }}
                onClick={() => {
                  props.tagClick(el.Tag);
                }}
              >
                {el.Tag}
              </span>
            );
          })}
      </div>
    </div>
  );
}
export default Index;
