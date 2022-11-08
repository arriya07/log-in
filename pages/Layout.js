import 'antd/dist/antd.css'
import {
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import RouteApp from './components/App';
import Profile from './profile';



const { Header, Content, Footer, Sider } = Layout;
function getItem(label,key, icon, children,RouteApp ) {
    return {
        icon,
        children,
        label,
        key,
        RouteApp ,
    };
}
const items = [
    getItem('NemeUser','0',),
    getItem('Usere Profil','1',<UserOutlined />,<RouteApp path={'/profile'} component={Profile} />),
    getItem('Team', 'sub2', <TeamOutlined />, 
    [getItem('Team 1', '6'), 
    getItem('Team 2', '8')]),

];
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{minHeight: '100vh',}}>

            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> 
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

                <Content style={{  margin: '0 16px',}}>
                    <Breadcrumb style={{ margin: '16px 0', }} >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 40,minHeight: 460,}}>
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