import React from "react";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";

function MenuBar() {
  return (
    <div>
      <Menu
        onClick={() => {
          console.log("click");
        }}
        mode="horizontal"
      >
        <Menu.Item key="mail" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuBar;
