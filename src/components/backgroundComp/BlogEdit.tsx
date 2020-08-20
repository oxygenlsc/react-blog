import React, { useEffect, useState } from 'react';
import './common.less';
import ReactMarkdown from 'react-markdown';
import { Input, Upload, Button, Tooltip } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import ImgCrop from 'antd-img-crop';
import { Button1, Button2 } from '@/components/signButton/Button';
import HeadingBlock from '../mdHeading/headingBolck';
import '@/assets/mdless/index.less';
import heading from '../mdHeading/heading';
const { TextArea } = Input;
export default function BlogEdit(props) {
  const [inp, setinp] = useState(``);
  const [sc, setsc] = useState('');
  const [rule, setrule] = useState(false);
  const [imgsend, setimgsend] = useState(false);
  const [detail, setdetail] = useState(false);
  const [myfileList, setFileList] = useState([]);
  const [blogDetail, setblogDetail] = useState({
    title: '',
    des: '',
    tag: '',
    author: 'oxygen',
  });
  const showAndHide = () => {
    setrule(!rule);
    setimgsend(false);
    setdetail(false);
  };
  const showImg = () => {
    setrule(false);
    setdetail(false);
    setimgsend(!imgsend);
  };
  const onChange = ({ file }) => {
    console.log(file.response);
    if (file.response) {
      setFileList([...myfileList, file.response]);
    } else {
    }
  };
  const showDetail = () => {
    setrule(false);
    setimgsend(false);
    setdetail(!detail);
  };
  const pdata = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    // defaultFileList: [...myfileList],
    data: { id: 123 }, //这个地方就是上传时的标识
  };
  const setDetail = (type, data) => {
    setblogDetail({
      ...blogDetail,
      [type]: data,
    });
  };
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Button1
        type="oneStyle"
        title="语法展开"
        top="80px"
        left="30px"
        bg="#f80"
        click={showAndHide}
      />
      <Button2
        type="oneStyle"
        title="上传图片"
        top="80px"
        left="120px"
        bg="lightblue"
        click={showImg}
      />
      <Button2
        type="oneStyle"
        title="文章细节"
        top="80px"
        left="210px"
        bg=""
        click={showDetail}
      />
      <div className="edit-warpper">
        <TextArea
          className="edit-inp-box"
          onChange={({ target: { value } }) => {
            setinp(value);
          }}
          onScroll={e => {
            sc.scrollTop = e.target.scrollTop;
          }}
        ></TextArea>
        <div
          className="show-html"
          id="md"
          ref={e => {
            setsc(e);
          }}
        >
          <ReactMarkdown
            source={inp}
            renderers={{
              heading: HeadingBlock,
            }}
          />
        </div>
        <div
          className="md-rule-show"
          style={{ opacity: rule ? 1 : 0, height: rule ? 500 : 0 }}
        >
          # 这是一级标题 ## 这是二级标题 ### 这是三级标题 #### 这是四级标题
          ##### 这是五级标题 ###### 这是六级标题
          <br />
          **这是加粗的文字** *这是倾斜的文字*` ***这是斜体加粗的文字***
          ~~这是加删除线的文字~~
          <br />
          >这是引用的内容 >>这是引用的内容 >>>>>>>>>>这是引用的内容
          <br />
          分割线：--- ---- *** *****
          <br />
          ![图片alt](图片地址 ''图片title'')
          <br />
          [超链接名](超链接地址 "超链接title")
          <br />
          无序列表:下面任意一种即可 - 列表内容 + 列表内容 * 列表内容 注意：- + *
          跟内容之间都要有一个空格
          <br />
          有序列变：数字加点 1. 列表内容 2. 列表内容 3. 列表内容
          注意：序号跟内容之间要有空格
          <br />
          列表嵌套 上一级和下一级之间敲三个空格即可
          <br />
          表格: <br /> 表头|表头|表头
          <br />
          ---|:--:|---: <br />
          内容|内容|内容
          <br />
          内容|内容|内容
          <br />
          第二行分割表头和内容。 - 有一个就行，为了对齐，多加了几个 文字默认居左
          -两边加：表示文字居中 -右边加：表示文字居右 注：原生的语法两边都要用 |
          包起来。此处省略
          <br />
          代码：``` 多行代码 ``` `单行代码` <br />
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          <br />
          流程图：```flow <br />
          st=>start: 开始 <br />
          op=>operation: My Operation <br />
          cond=>condition: Yes or No? <br />
          e=>end <br />
          st->op->cond <br />
          cond(yes)->e <br />
          cond(no)->op <br />
          &```
        </div>
        <div
          className="send-img"
          style={{ opacity: imgsend ? 1 : 0, height: imgsend ? 500 : 0 }}
        >
          <Upload {...pdata} onChange={onChange}>
            <Button>
              <UploadOutlined /> Upload
            </Button>
          </Upload>
          <ul className="urlList">{myfileList.map((el, i) => creatLi(el))}</ul>
        </div>
        <div
          className="artic-detail"
          style={{ opacity: detail ? 1 : 0, height: detail ? 500 : 0 }}
        >
          {detail ? (
            <>
              <div className="atrc-title">
                <h1>标题</h1>
                <Input
                  className="title"
                  value={blogDetail.title}
                  onChange={e => {
                    setDetail('title', e.target.value);
                  }}
                ></Input>
              </div>
              <div className="atrc-des">
                <h1>解释</h1>
                <TextArea
                  className="des"
                  value={blogDetail.des}
                  onChange={e => {
                    setDetail('des', e.target.value);
                  }}
                ></TextArea>
              </div>
              <div className="atrc-tg">
                <h1>标签</h1>
                <Input
                  className="tag"
                  value={blogDetail.tag}
                  onChange={e => {
                    setDetail('tag', e.target.value);
                  }}
                ></Input>
              </div>
              <div className="atrc-author">
                <h1>作者</h1>
                <Input
                  className="author"
                  value={blogDetail.author}
                  onChange={e => {
                    setDetail('author', e.target.value);
                  }}
                ></Input>
              </div>
              <div className="submit">
                <Button
                  shape="round"
                  type="primary"
                  onClick={() => {
                    console.log(inp);
                    console.log(blogDetail);
                  }}
                >
                  提交blog
                </Button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function creatLi(props) {
  return (
    <li className="url-list">
      <div className="img-name">{props.name}</div>
      <Tooltip title="点击复制链接">
        <div className="img-url" contentEditable="true">
          {props.url}
        </div>
      </Tooltip>
    </li>
  );
}
