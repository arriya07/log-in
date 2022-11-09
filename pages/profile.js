import Head from 'next/head'
import Image from 'next/image'
import 'antd/dist/antd.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link'
import { useEffect, useState } from 'react'
const { Header, Sider, Content } = Layout;

export default function Profile() {
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
<Layout className="layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'Profile',
                  Link :<Link to="/profile"/>
                  
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2',
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 3',
                },
              ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content className="site-layout-background"  style={{  margin: '24px 16px',  padding: 24, }}>
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
          </Content>
        </Layout>
      </Layout>
          

    )
}