import { Menu } from "antd";
import { FormattedMessage } from "react-intl";
import "./Header.scss";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const PATHS_MENU_ITEMS: any = {
  "/": "1",
  "/contact": "2",
};

export default function Header() {
  const activeMenuItem = PATHS_MENU_ITEMS[window.location.pathname];

  return (
    <>
      <img src={logo} className="logo" alt="App logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={activeMenuItem ? [activeMenuItem] : undefined}
      >
        <Menu.Item key="1">
          <Link to="/">
            <FormattedMessage
              id="home"
              defaultMessage="Home"
            ></FormattedMessage>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/contact">
            <FormattedMessage
              id="contact"
              defaultMessage="Contact"
            ></FormattedMessage>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
}
