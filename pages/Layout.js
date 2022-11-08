import 'antd/dist/antd.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout"> {/*เริ่มตัว layout  */}
    <Header> {/*ส่วน Header หรือแทบเมนู  */}
      <div className="logo" />  
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(8).fill(null).map((_, index) => { {/* Array(x) ไว้กำหนดจำนวนเมนู */}
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Homeertyu</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);
export default App;

