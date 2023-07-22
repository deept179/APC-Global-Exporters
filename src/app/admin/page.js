"use client";
import { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

import Category from '@/app/admin/category/page';
import Product from '@/app/admin/product/page';
import ContactUs from '@/app/admin/contact-us/page';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const AdminLayout = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />} onClick={() => selected !== "1" && setSelectedKey("1")}>
            <a href="/admin/category">Category</a>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Product">
            <Menu.Item key="3" onClick={() => selected !== "3" && setSelectedKey("3")}>
              <a href="/admin/product" >Product</a>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />} onClick={() => selected !== "9" && setSelectedKey("9")}>
            <Link href="/admin/contact-us">Contact Us</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link href="/admin">Admin</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {selectedKey == "1" && <Category />}
            {selectedKey == "3" && <Product />}
            {selectedKey == "9" && <ContactUs />}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Your Admin Panel Footer</Footer>
      </Layout>
    </Layout>
  );
};


AdminLayout.defaultProps = {
  currentPath: '', // Provide a default value for currentPath
};

export default AdminLayout;
