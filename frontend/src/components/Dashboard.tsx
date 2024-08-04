
/**
 * Title: Dashboard
 * Description: Main dashboard interface for managing projects and accessing analytics.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /src/components/Dashboard.tsx
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, MessageOutlined } from '@ant-design/icons';
import ChatInterface from './ChatInterface';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard: React.FC = () => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Dashboard</Menu.Item>
                    <Menu.Item key="2">Projects</Menu.Item>
                    <Menu.Item key="3">Analytics</Menu.Item>
                    <Menu.Item key="4" icon={<MessageOutlined />}>Chat</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="1">Profile</Menu.Item>
                            <Menu.Item key="2">Settings</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Projects">
                            <Menu.Item key="3">Create New</Menu.Item>
                            <Menu.Item key="4">Manage</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Support">
                            <Menu.Item key="5">Documentation</Menu.Item>
                            <Menu.Item key="6">Community</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <h2>Welcome to the Dashboard!</h2>
                        <ChatInterface />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
                    