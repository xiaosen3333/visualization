import React, { Fragment, useEffect, useRef, useState } from "react";
import "./home.css"; // 引入自定义样式
import { WelcomeSection } from "../../components/Welcome/welcome";

import { Button, Card, Flex, Typography } from "antd";

const boxStyle: React.CSSProperties = {
  width: "100%",
  height: "50vh",
  borderRadius: 6,
  marginTop: "4rem",
};

const App: React.FC = () => {
  return (
    <Flex gap="middle" align="start" vertical>
      <Flex style={boxStyle} justify={"space-around"} align={"center"}>
        <App1 />
        <App2 />
      </Flex>
    </Flex>
  );
};

const cardStyle: React.CSSProperties = {
  width: "36vw",
  height: "55vh",
};

const imgStyle: React.CSSProperties = {
  borderRadius: 6,
  width: "100%",
  height: "100%",
};

const App1: React.FC = () => (
  <Card hoverable style={cardStyle}>
    <Flex justify="space-between" vertical>
      <img alt="avatar" src="./industry.png" style={imgStyle} />
      <Flex vertical align="flex-end" style={{ padding: 32, paddingTop: 0 ,height:'100%'}}>
        <Typography.Title level={3}>
          点击了解全球前端行业情况与趋势、从业者信息数据、未来五年工资预测
        </Typography.Title>
        <Button type="primary" href="/industry">
          Get Started
        </Button>
      </Flex>
    </Flex>
  </Card>
);

const App2: React.FC = () => (
  <Card hoverable style={cardStyle}>
    <Flex justify="space-between" vertical>
      <img alt="avatar" src="./frame.png" style={imgStyle} />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{ padding: 32, paddingTop: 0 }}
      >
        <Typography.Title level={3}>
          点击了解前端开发者对各种前端框架的态度、前端框架的热度排行
        </Typography.Title>
        <Button type="primary" href="/frame">
          Get Started
        </Button>
      </Flex>
    </Flex>
  </Card>
);

function Home() {
  const appRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (appRef.current) {
      if (show) {
        appRef.current.style.height = "70vh";
      } else {
        appRef.current.style.height = "0";
      }
    }
  }, [show]); // 当show状态变化时触发
  function onclick() {
    setShow(true);
  }
  return (
    <div className="mainbody" style={{backgroundImage:"url(./3.jpg)",backgroundSize:"100% 100%",minWidth:"100vw",minHeight:"100vh"}}>
      <WelcomeSection handleClick={onclick} />
      <div
        ref={appRef}
        style={{
          height: "0",
          overflow: "hidden",
          transition: "height 0.5s ease-in-out",
        }}
      >
        <App />
      </div>
    </div>
  );
}
export default Home;
