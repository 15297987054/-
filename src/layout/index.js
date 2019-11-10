import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Button, Icon, message, Row, Col } from 'antd';
import renderTabBar from '@utils/renderTabBar';
import { layoutRoute } from '@router';
import Cookies from "js-cookie"
import { withRouter } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
@withRouter
class LayoutComponent extends Component {
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick.bind(this)}>
        <Menu.Item key="1">
          <Icon type="user" />
          个人信息
          </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          修改密码
          </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          退出登录
          </Menu.Item>
      </Menu>
    );

    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}

            onClick={this.handleTo.bind(this)}
          >
            {renderTabBar(layoutRoute)}
          </Menu>
        </Sider>

        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Row>
              <Col span={3} offset={21}>
                <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
                  个人中心
                </Dropdown.Button>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
  handleMenuClick({key}){
    if(key==="1"){
      this.props.history.push("/user/userlist")
    }
    if(key==="3"){
      Cookies.remove("token");
      this.props.history.push("/login")
    }
  }
  handleTo({ key }) {
    this.props.history.push(key)
  }
}

export default LayoutComponent;