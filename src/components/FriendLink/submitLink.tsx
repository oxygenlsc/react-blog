import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { connect } from 'dva';

export default function SubmitLink(props) {
  const { dispatch } = props;
  const [form] = Form.useForm();
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div style={{ width: '50%' }}>
      <Form
        form={form}
        name="control-hooks"
        onFinish={val => {
          dispatch({
            type: 'friendlink/addFriendLink',
            payload: val,
          }).then(res => {
            if (res.success) {
              message.success(res.msg);
              onReset();
            } else {
              message.success(res.msg);
            }
          });
        }}
      >
        <Form.Item
          name="Linkname"
          label="站点名称"
          rules={[{ required: true, message: '小黎提醒：请填写站点名称..' }]}
        >
          <Input placeholder="好好写哦 小黎看着你的！" />
        </Form.Item>
        <Form.Item
          name="Emilurl"
          label="邮箱地址"
          rules={[{ required: true, message: '小黎提醒：请填写邮箱地址..' }]}
        >
          <Input placeholder="好好写哦 小黎看着你的！" />
        </Form.Item>
        <Form.Item
          name="Linkurl"
          label="站点地址"
          rules={[{ required: true, message: '小黎提醒：请填写站点地址..' }]}
        >
          <Input placeholder="好好写哦 小黎看着你的！" />
        </Form.Item>
        <Form.Item
          name="Webdesc"
          label="站点描述"
          rules={[{ required: true, message: '小黎提醒：请填写站点描述..' }]}
        >
          <Input.TextArea placeholder="好好写哦 小黎看着你的！" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: '10px' }}
          >
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
