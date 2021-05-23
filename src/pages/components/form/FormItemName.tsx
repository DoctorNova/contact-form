import { Form, Input } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

const LABEL = <FormattedMessage id="name" defaultMessage="Name" />;
const RULES = [
  {
    required: true,
    message: (
      <FormattedMessage
        id="nameRequired"
        defaultMessage="Please provide your name"
      />
    ),
  },
];

const FormItemName = () => (
  <Form.Item label={LABEL} name="name" rules={RULES}>
    <Input />
  </Form.Item>
);

export default FormItemName;