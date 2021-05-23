import { Form, Input } from "antd";
import { Rule } from "rc-field-form/lib/interface";
import { FormattedMessage } from "react-intl";
import React from "react";

const labelEmail = (
  <FormattedMessage id="email" defaultMessage="Email address" />
);
const rules: Rule[] = [
  {
    required: true,
    message: (
      <FormattedMessage
        id="emailRequired"
        defaultMessage="Please provide an email address"
      />
    ),
  },
  {
    type: "email",
    message: (
      <FormattedMessage
        id="emailInvalid"
        defaultMessage="Please insert a valid email address"
      />
    ),
  },
];

const FormItemEmail = () => (
  <Form.Item label={labelEmail} name="email" rules={rules}>
    <Input />
  </Form.Item>
);

export default FormItemEmail;
