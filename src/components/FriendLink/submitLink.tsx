import React from 'react'
import { Form, Input, Button, Select } from 'antd';
export default function SubmitLink(props) {
    const [form] = Form.useForm();
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
      const onReset = () => {
        form.resetFields();
      };
    return (
        <div style={{width:'50%'}}>
            <Form form={form} name="control-hooks"   onFinish={(val)=>{
                    console.log(val)
            }} >
            <Form.Item name="Wname" label="站点名称" rules={[{ required: true ,message:'小黎提醒：请填写站点名称..' }]}>
                <Input placeholder='好好写哦 小黎看着你的！' />
            </Form.Item>
            <Form.Item name="Eaddress" label="邮箱地址" rules={[{ required: true ,message:'小黎提醒：请填写邮箱地址..' }]}>
                <Input placeholder='好好写哦 小黎看着你的！' />
            </Form.Item>
            <Form.Item name="Waddress" label="站点地址" rules={[{ required: true ,message:'小黎提醒：请填写站点地址..'}]}>
                <Input placeholder='好好写哦 小黎看着你的！' />
            </Form.Item>
            <Form.Item name="Wdes" label="站点描述" rules={[{ required: true ,message:'小黎提醒：请填写站点描述..' }]}>
                <Input.TextArea placeholder='好好写哦 小黎看着你的！' />
            </Form.Item>

                <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit"  style={{marginRight:'10px'}} >
                提交
            </Button >
            <Button htmlType="button" onClick={onReset}>
                重置
            </Button>
        </Form.Item>
            </Form>
        </div>
    )
}
