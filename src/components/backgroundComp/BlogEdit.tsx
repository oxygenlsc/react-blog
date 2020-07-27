import React, { useEffect, useState } from 'react';
import './common.less';
import ReactMarkdown from 'react-markdown';
import { Input, Upload, Button, Tooltip } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import ImgCrop from 'antd-img-crop';
import { Button1, Button2 } from '@/components/signButton/Button';
import '@/assets/mdless/index.less';
const { TextArea } = Input;
export default function BlogEdit(props) {
  const [inp, setinp] = useState(``);
  const [sc, setsc] = useState('');
  const [rule, setrule] = useState(false);
  const [imgsend, setimgsend] = useState(false);
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
  };
  const showImg = () => {
    setrule(false);
    setimgsend(!imgsend);
  };
  const onChange = ({ file }) => {
    console.log(file.response);
    if (file.response) {
      setFileList([...myfileList, file.response]);
    } else {
    }
  };
  const pdata = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    // defaultFileList: [...myfileList],
    data: { id: 123 }, //这个地方就是上传时的标识
  };
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Button1
        type="oneStyle"
        title="语法展开"
        top="80px"
        left="30px"
        click={showAndHide}
      />
      <Button2
        type="oneStyle"
        title="上传图片"
        top="80px"
        left="120px"
        click={showImg}
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
          <ReactMarkdown source={inp} />
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
