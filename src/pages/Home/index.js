import React from "react";
import "./style.less";
import { Layout } from "antd";
import { Route } from "react-router";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
function About() {
  return <div>我是一个about的页面</div>;
}
function Other() {
  return <div>我是一个其他的页面</div>;
}
function Home() {
  return (
    <Layout>
      <Header>我是一个公共的头部</Header>
      <Layout>
        <Sider>
          <ul>
            <li>
              <Link to="/home/about">详情页面</Link>
            </li>
            <li>
              <Link to="/home/other">其他页面</Link>
            </li>
          </ul>
        </Sider>
        <Content>
          <Route path="/home/about" component={About}></Route>
          <Route path="/home/other" component={Other}></Route>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
