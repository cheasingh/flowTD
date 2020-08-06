import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Home from "./pages/Home";

function App() {
  const { Header } = Layout;
  const headerStyle = {
    color: "white",
    padding: "0 0 0 20px",
  };
  return (
    <div>
      <Router>
        <Header style={headerStyle}>
          FlowTD
          <Avatar
            style={{ float: "right", margin: "20px 20px 0 0" }}
            icon={<UserOutlined />}
          />
        </Header>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
