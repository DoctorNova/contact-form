import { Form, Input } from "antd";
import { FormattedMessage } from "react-intl";
import React from "react";

const label = (
  <FormattedMessage id="description" defaultMessage="Description" />
);
const rules = [
  {
    required: true,
    message: (
      <FormattedMessage
        id="descriptionRequired"
        defaultMessage="Please provide a description"
      />
    ),
  },
];

const FormItemDescription = () => (
  <Form.Item label={label} name="description" rules={rules}>
    <Input.TextArea />
  </Form.Item>
);

export default FormItemDescription;
