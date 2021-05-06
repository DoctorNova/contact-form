import { Menu } from "antd";
import { FormattedMessage } from "react-intl";
import "./Header.scss";
import logo from "./logo.svg";
import { Link, useLocation } from "react-router-dom";
import LangSelect from "../i18n/LangSelect";
import { Language } from "../i18n/I18nProvider";

const PATHS_MENU_ITEMS: any = {
  "/": "1",
  "/contact": "2",
};

export default function Header({language, onLangChange }: {language: Language, onLangChange: (lang: Language) => void}) {
  const location = useLocation();
  const activeMenuItem = PATHS_MENU_ITEMS[location.pathname];

  return (
    <div className="header">
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
      <div className="lang">
        <LangSelect language={language} onChange={onLangChange} />
      </div>
    </div>
  );
}
