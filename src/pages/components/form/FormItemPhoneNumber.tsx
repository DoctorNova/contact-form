import { Form, Input } from "antd";
import { FormattedMessage } from "react-intl";
import FormItemPhoneNumberPrefix from "./FormItemPhoneNumberPrefix";
import React from "react";

const phoneNumberPrefixSelect = <FormItemPhoneNumberPrefix noStyle />;
const INPUT_STYLE = {
  width: "100%",
};
const RULES = [
  {
    required: true,
    message: (
      <FormattedMessage
        id="phoneNumberRequired"
        defaultMessage="Please provide a phone number"
      />
    ),
  },
  {
    pattern: /\+?[0-9/\s]+/g,
    message: (
      <FormattedMessage
        id="phoneNumberInvalid"
        defaultMessage="Please provide a correct phone number"
      />
    ),
  },
];
const labelPhoneNumber = (
  <FormattedMessage id="phoneNumber" defaultMessage="Phone Number" />
);

const FormItemPhoneNumber = () => (
  <Form.Item label={labelPhoneNumber} name="phone" rules={RULES}>
    <Input addonBefore={phoneNumberPrefixSelect} style={INPUT_STYLE} />
  </Form.Item>
);

export default FormItemPhoneNumber;
