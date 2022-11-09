import Head from 'next/head'
import Image from 'next/image'

import 'antd/dist/antd.css'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useEffect,useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [profile, setProfile] = useState({}) //useState เป็นการเรียกใช้งาน state และ การเปลี่ยนแปลงค่า state
  let liff
  useEffect(() => {
      liff = require('@line/liff')
      const lineliff = async () => {
          try {
              await liff.init({ liffId: `${process.env.NEXT_PUBLIC_LIFF_ID}` }); //
          } catch (error) {
              console.error('liff init error', error.message)
          }
          if (!liff.isLoggedIn()) {
              liff.login();
          }
          const profile = await liff.getProfile()
          setProfile(profile)
      }
      lineliff()
  })
  return (
    <Layout style={{ minHeight: '100vh',}} >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, }}/>

        <Content style={{ margin: '0 16px', }}>
          <Breadcrumb style={{ margin: '16px 0',}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }} >
          <div style={{ textAlign: "center" }} >
            <Head>
                <title>My Profile</title>
            </Head>
            <h1>Profile</h1>
                {profile.pictureUrl && <Image
                    src={profile.pictureUrl}
                    alt={profile.displayName}
                    width={400}
                    height={400}
                />}
                <div>Name: {profile.displayName}</div>
            </div>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center',}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
