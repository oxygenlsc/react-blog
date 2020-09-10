import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import HeadingBlock from '@/components/mdHeading/headingBolck';
import { test } from '@/mock/data';
import { getStringArr } from '@/utils/util';
import $ from 'jquery';
import '@/assets/style/articdetail.less';
import '@/assets/mdless/index.less';
import { LikeTwoTone, EyeTwoTone, LikeOutlined } from '@ant-design/icons';
import { connect } from 'dva';
function ArticDetail(props: any) {
  const { dispatch } = props;
  useEffect(() => {
    const id = props.history.location.query.id;
    const senddata = {
      type: 'id',
      id,
    };
    dispatch({
      type: 'blog/getDetail',
      payload: senddata,
    }).then(res => {
      console.log(res);
      if (res.success) {
        setdetailMsg(res.data);
        setmenuitem(getStringArr(res.data.Bcontent, '~~'));
      }
    });
  }, []);
  useEffect(() => {
    const harr = $('#md h1');
    const heightArr = [];
    for (let i = 0; i < harr.length; i++) {
      const el = harr[i];
      heightArr.push(el.offsetTop);
    }
    let luck = true;
    const scroolEve = event => {
      const scrollTop =
        (event.srcElement
          ? event.srcElement.documentElement.scrollTop
          : false) ||
        window.pageYOffset ||
        (event.srcElement ? event.srcElement.body.scrollTop : 0);
      if (scrollTop > $('#articMenu')[0].offsetTop && luck) {
        setFixed(true);
        luck = false;
      } else if (scrollTop < 200) {
        setFixed(false);
        luck = true;
      }
      heightArr.forEach((el, i) => {
        if (scrollTop > el) {
          setcurTitle(menuitem[i]);
        }
      });
    };
    window.addEventListener('scroll', scroolEve);
    return () => {
      window.removeEventListener('scroll', scroolEve);
    };
  }, []);
  const [detailMsg, setdetailMsg] = useState({});
  const [Fixed, setFixed] = useState(false);
  const [menuitem, setmenuitem] = useState([]);
  const [curTitle, setcurTitle] = useState('');
  // const [heightarr, setheightarr] = useState([]);
  const liList = menuitem.map((el, i) => (
    <li
      key={i}
      style={{
        color: curTitle == el ? 'rgb(0, 195, 255)' : '#ccc',
      }}
      onClick={() => {
        setcurTitle(el);
      }}
    >
      <a
        href={`#${el}`}
        style={{
          color: curTitle == el ? 'rgb(0, 195, 255)' : '#ccc',
        }}
      >
        {el}
      </a>
    </li>
  ));
  return (
    <div className="detail-content">
      <div className="left-btn-box">
        <div className="artic-good-box">
          <LikeOutlined />
        </div>
      </div>
      <div className="middle-article" id="md">
        <ReactMarkdown
          source={detailMsg.Bcontent}
          renderers={{
            heading: HeadingBlock,
          }}
        />
      </div>
      <div className="right-menu">
        <div className="author-box">
          <h3 className="about-author">关于作者</h3>
          <ul className="author-box-bottom">
            <li className="first-li">
              <div className="li-img-box">
                <img src={require('@/assets/imgs/s1.jpg')} alt="" />
              </div>
              <span>oxygen</span>
            </li>
            <li>
              {' '}
              <LikeTwoTone twoToneColor="#f80" /> 获得点赞{' '}
              {detailMsg.Blike ? detailMsg.Blike : 0}
            </li>
            <li>
              <EyeTwoTone /> 阅读量 {detailMsg.Bview ? detailMsg.Bview : 0}
            </li>
          </ul>
        </div>
        <div
          className="artic-menu"
          id="articMenu"
          style={{
            position: Fixed ? 'fixed' : 'relative',
            top: Fixed ? '70px' : '',
          }}
        >
          <h2 style={{ color: '#fff' }}>文章目录</h2>
          <ul className="menu-box">{liList}</ul>
        </div>
      </div>
    </div>
  );
}

export default connect(blog => blog)(ArticDetail);
