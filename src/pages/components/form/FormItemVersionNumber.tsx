import { Form, Input } from "antd";
import { FormattedMessage } from "react-intl";
import React from "react";

const label = (
  <FormattedMessage id="versionNumber" defaultMessage="Version number" />
);
const rules = [
  {
    required: true,
    message: (
      <FormattedMessage
        id="versionNumberRequired"
        defaultMessage="Please provide the version number of the software"
      />
    ),
  },
  {
    pattern: /^(\d){1,3}\.(\d){1,3}\.(\d){1,3}$/g,
    message: (
      <FormattedMessage
        id="versionNumberInvalid"
        defaultMessage="Please provide a correct version number"
      />
    ),
  },
];

const FormItemVersionNumber = () => (
  <Form.Item label={label} name="versionNumber" rules={rules}>
    <Input />
  </Form.Item>
);

export default FormItemVersionNumber;
