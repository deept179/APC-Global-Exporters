"use client";
import { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Row } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo/APC-white.png";
import Category from "@/app/admin/category/page";
import Product from "@/app/admin/product/page";
import ContactUs from "@/app/admin/contact-us/page";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminLayout = () => {
  const [selectedKey, setSelectedKey] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="my-6 flex justify-start ml-6 items-center">
          <Image src={Logo} alt="Company logo" width={56} height={28} className={`${collapsed && `w-10`}`} />
          {!collapsed && <Row className="text-slate-300 ml-2">APC</Row>}
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item
            key="1"
            icon={<PieChartOutlined />}
            onClick={() => selectedKey !== "1" && setSelectedKey("1")}
          >
            Category
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Product">
            <Menu.Item
              key="3"
              onClick={() => selectedKey !== "3" && setSelectedKey("3")}
            >
              Product
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key="9"
            icon={<FileOutlined />}
            onClick={() => selectedKey !== "9" && setSelectedKey("9")}
          >
            Contact Us
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: "0 16px", display: "flex", alignItems: "center" }}
        >
          <h2 style={{ color: "#fff", margin: 0, flex: 1 }}>Admin Panel</h2>
          {/* Add user avatar and other user information here */}
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link href="/admin">Admin</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* Add a loading state here */}
            {selectedKey === "1" && <Category />}
            {selectedKey === "3" && <Product />}
            {selectedKey === "9" && <ContactUs />}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Your Admin Panel Footer</Footer>
      </Layout>
    </Layout>
  );
};

AdminLayout.defaultProps = {
  currentPath: "", // Provide a default value for currentPath
};

export default AdminLayout;
