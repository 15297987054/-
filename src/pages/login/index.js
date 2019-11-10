import React from "react";
import { LoginWrapper } from "./styled"
import { Form, Icon, Input, Button, Checkbox, Row,Col, } from 'antd';
import connect from './connect';
import Cookie from "js-cookie"
@connect
@Form.create()
class Login extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        let {code} = this.props;
        return (
            <LoginWrapper>
                <div className="loginContainer">
                <div className="logo">
                    <img alt="" src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=650404382,1352679366&fm=202&mola=new&crop=v1"/>
                </div>
                    <Form onSubmit={this.props.handleLogin.bind(this)}>
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                { required: true, message: '用户名必须填写!' },
                                {len:11,message:"用户名长度必须为11"},
                                {pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号"}
                            
                            ],
                          })(
                            <Input
                              prefix={<Icon type="user"/>}
                              placeholder="请输入用户名"
                            />,
                          )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: '请输入密码!' },
                               
                        ],
                          })(
                            <Input
                              prefix={<Icon type="lock"/>}
                              type="password"
                              placeholder="请输入密码"
                            />,
                          )}
                        </Form.Item>

                        <Form.Item >
                        <Row gutter={8}>
                          <Col span={12}>
                            {getFieldDecorator('captcha', {
                              rules: [{ required: true, message: '请输入验证码!' },
                               {pattern:/^\d{4,16}$/,message:"验证码错误，请重新输入数字验证码"}],
                            })(<Input placeholder="请输入验证码" className="captcha_box" />)}
                          </Col>
                          <Col span={12}>
                            <Button style={{marginLeft:"53px",marginTop:"-9px"}}>
                              <img src={code}/>
                            </Button> 
                          </Col>
                        </Row>
                      </Form.Item>

                        <Form.Item>
                            <Button type="primary" block htmlType="submit">登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </LoginWrapper>
        )
    }
    componentDidMount(){
        this.props.verifyCode();
        Cookie.set("token")
    }
   
}

export default Login;