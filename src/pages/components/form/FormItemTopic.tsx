import { Form } from "antd";
import { FormattedMessage } from "react-intl";
import TopicSelect from "../TopicSelect";
import React from "react";

const label = <FormattedMessage id="topic" defaultMessage="Topic" />;
const rules = [
  {
    required: true,
    message: (
      <FormattedMessage
        id="topicRequired"
        defaultMessage="Please select a topic"
      />
    ),
  },
];

const FormItemTopic = () => (
  <Form.Item label={label} name="topic" rules={rules}>
    <TopicSelect />
  </Form.Item>
);

export default FormItemTopic;
