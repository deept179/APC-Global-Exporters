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
import Image from 'next/image';
import Logo from "../../assets/logo/logo.png"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const AdminLayout = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item>
            <Image src={Logo} alt="Company logo" className='' />
          </Menu.Item>

          <Menu.Item key="1" icon={<PieChartOutlined />} onClick={() => selectedKey !== "1" && setSelectedKey("1")}>
            Category
          </Menu.Item>

          <SubMenu key="sub1" icon={<UserOutlined />} title="Product">
            <Menu.Item key="3" onClick={() => selectedKey !== "3" && setSelectedKey("3")}>
              Product
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />} onClick={() => selectedKey !== "9" && setSelectedKey("9")}>
            Contact Us
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
