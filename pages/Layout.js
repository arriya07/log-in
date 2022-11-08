import 'antd/dist/antd.css'
import { Layout, Menu, Icon } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useState } from 'react';


const { Header, Content, Footer, Sider } = Layout;


const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: '100vh', }}>

            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Deshboard</span>
                        <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Meseros</span>
                        <Link to="/meseros" />
                    </Menu.Item>
                </Menu>
            </Sider>
            {/*Sider แถบด้านข้าง จะทำการประกาศ items เมนูไว้ข้างบนแล้วดึงมาใช้ ใน <Menu/>*/}

            <Layout className="site-layout">
                {/* <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array().fill(null).map((_, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: ` ${key}`,
                            };
                        })}
                    />
                </Header> */}
                {/*Header แถบด้านบน กำหนดจำนวนโดยใช้  Array(X) ว่าต้องการเมนูอีกตัว */}

                <Content style={{ margin: '0 16px', }}>
                    <Breadcrumb style={{ margin: '16px 0', }} >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 40, minHeight: 460, }}>
                        Bill is a cat.
                    </div>
                </Content>
                {/*Content ส่วนเนื้อตรงกลาง */}

                <Footer style={{ textAlign: 'center', }} >
                    Build ตอนไหนตื่นเต้นทุกที่
                </Footer>

            </Layout>
        </Layout>
    );
};
export default App;