import React from "react";
import { Breadcrumb, Layout } from "antd";

import Header from "../Header/Header";

import styles from "./Wrapper.module.scss";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

function Wrapper() {
  return (
    <Layout className={styles.container}>
      {<Header />}

      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Wrapper;
