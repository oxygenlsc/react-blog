import React, { useState, useEffect } from 'react';
import LinkItem from './LinkItem';
import { getRandom, waterFull } from '@/utils/util';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import SubmitLink from './submitLink';
import { message } from 'antd';
import { connect } from 'umi';

function LinkBox(props) {
  const { dispatch } = props;
  const [data, setdata] = useState([
    {
      img: 'http://www.baidu.com/favicon.ico',
      link: 'http://www.baidu.com',
      des: '搜索用的',
      name: 'baidu',
    },
  ]);
  const [height, setspans] = useState(getRandom(150, 220));
  useEffect(() => {
    waterFull('link-item-box', 'friend-link-box', 200, 5);
  }, []);
  useEffect(() => {
    dispatch({
      type: 'friendlink/getAllLink',
      payload: '',
    }).then(res => {
      if (res.success) {
        setdata(res.data);
      } else {
        message.error(res.msg);
      }
    });
  }, []);
  return (
    <div className="friend-link-wrapper">
      <div className="friend-link-box" id="friend-link-box">
        {data.map((el, i) => (
          <LinkItem
            key={i}
            height={height}
            bgC={`rgba(${getRandom(150, 220)},${getRandom(
              150,
              220,
            )},${getRandom(150, 220)},0.5)`}
            itemMsg={el}
          />
        ))}
      </div>
      <div className="add-friend-link">
        <header className="des">
          <h3>友链申请</h3>
          <div className="friend-wran">
            {' '}
            <ExclamationCircleTwoTone twoToneColor="#f80" /> 听小黎说：
          </div>
          <p>在申请本站友链之前请确保已将本站加入友链。</p>
          <p>
            本站优先录入同类原创、技术生活类博客。任何包含违法国家法律或不健康内容站点均不录入。
          </p>
          <p>百度、搜狗等搜索引擎权重无要求，但是要求时常更新网站内容。</p>
          <p>本站会不定期互相走访友链，发现单方取消友链便拉入黑名单。</p>
          <p>
            特别提醒:
            若无意外，在申请友链后24小时内完成审核并录入站点，如超时还未审核完成，请留言或者私信给我。
          </p>
        </header>
        <footer className="input">
          <SubmitLink {...props}></SubmitLink>
        </footer>
      </div>
    </div>
  );
}
export default connect(friendlink => friendlink)(LinkBox);
