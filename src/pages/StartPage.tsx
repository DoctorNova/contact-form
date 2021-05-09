import { Col, Row } from "antd";
import { MessageFilled } from "@ant-design/icons";
import React from "react";
import { FormattedMessage } from "react-intl";
import Page from "./Page";
import "./StartPage.scss";
import LinkButton from "./components/LinkButton";

export default function Startpage() {
  return (
    <Page>
      <Row>
        <Col span={24}>
          <div className="startpage-row">
            <FormattedMessage
              id="welcomeMsg"
              tagName="h1"
              defaultMessage="Welcome message"
            ></FormattedMessage>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="startpage-row">
            <LinkButton to="/contact" type="primary" icon={<MessageFilled />} size="large">
              <FormattedMessage
                id="getInTouch"
                defaultMessage="Contact us"
              ></FormattedMessage>
            </LinkButton>
          </div>
        </Col>
      </Row>
    </Page>
  );
}
