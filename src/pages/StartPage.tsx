import { Button, Col, Row } from "antd";
import { MessageFilled } from "@ant-design/icons";
import React from "react";
import { FormattedMessage } from "react-intl";
import Page from "./Page";
import "./StartPage.scss";
import { Link } from "react-router-dom";

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
            <Link to="/contact">
              <Button type="primary" icon={<MessageFilled />} size="large">
                <span>
                  <FormattedMessage
                    id="getInTouch"
                    defaultMessage="Contact us"
                  ></FormattedMessage>
                </span>
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Page>
  );
}
