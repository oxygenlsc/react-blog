import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
export default function Index(props) {
    return (
        <div>
              <Form
                {...layout}
                name={props.name}
                onFinish={props.success}
                onFinishFailed={props.fail}
            >
                <Form.Item
                    label={props.Clabel}
                    name = {'count'+props.index}
                    rules={[{ required: true, message: props.warnBody+props.Clabel }]}
                >
                 <Input  onClick ={(e)=>{
                        e.target.focus()
                    }}/>
                </Form.Item>

                <Form.Item
                    label={props.Plabel}
                    name = {'pw'+props.index}
                    rules={[{ required: true, message: props.warnBody+props.Plabel }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        {props.btnName}
                </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
