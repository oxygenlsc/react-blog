import React from 'react'
import './common.less'
import { Layout, Menu, Breadcrumb } from 'antd';
import {NavLink} from 'umi'
const { Header, Content, Footer } = Layout;

export default function BackHeader(props) {
    return (
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
             <Menu.Item key="1"><NavLink to='/'>返回博客首页</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to='/edit'>Blog编辑</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to='/edit/2' >后台数据统计</NavLink></Menu.Item>
          </Menu>
        </Header>
        
        <Content className="site-layout" style={{ padding: '0', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 0, minHeight: 600 }}>
                {props.children}
            </div>
        </Content>
      </Layout>
    )
}
