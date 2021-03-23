import React from 'react'
import {Form,Input,Button} from "antd"
function Login() {
    return (
        <div>
            <Form>
                <Form.Item label="Field A">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field B">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" size="large">Submit</Button>
                </Form.Item>
            </Form>
            
        </div>
    )
}

export default Login
