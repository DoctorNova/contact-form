import { Form, FormItemProps } from "antd";
import { FormattedMessage } from "react-intl";
import PhoneNumberPrefix from "../PhoneNumberPrefix";
import React from "react";

const RULES = [
  {
    required: true,
    message: (
      <FormattedMessage
        id="phoneNumberPrefix"
        defaultMessage="Please provide the prefix of your country"
      />
    ),
  },
];

const FormItemPhoneNumberPrefix = ( props: FormItemProps ) => (
  <Form.Item name="phonePrefix" rules={RULES} {...props}>
    <PhoneNumberPrefix />
  </Form.Item>
);

export default FormItemPhoneNumberPrefix;