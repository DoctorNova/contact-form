import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Select } from "antd";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import I18nProvider from "../../i18n/I18nProvider";
import { prefixes as phonePrefixes } from "./../../i18n/phone/PhoneNumberPrefixes";

export interface ContactData {
  name: string;
  email: string;
  topic: "request" | "bug" | "recall";
  phone?: string;
  phonePrefix?: string;
  version?: string;
  description: string;
}

interface ContactFormProps {
  onFinish: () => void;
  onError?: () => void;
}

// Used by the fetch code that is commented out.
// eslint-disable-next-line
const showError = () => {
  message.error({
    content: (
      // I18nProvider musst be provided because the message is not inside the React component tree.
      <I18nProvider>
        <FormattedMessage
          id="errorSendingContactForm"
          defaultMessage="An error occurred. Could not send request."
        />
      </I18nProvider>
    ),
    duration: 3,
    style: {
      marginTop: "50vh",
    },
  });
};

const ContactForm = ({ onFinish, onError }: ContactFormProps) => {
  const [data, setData]: [
    ContactData | undefined,
    React.Dispatch<React.SetStateAction<ContactData | undefined>>
  ] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendContactRequest = (data: ContactData) => {
    setIsLoading(true);

    /* Do something like:

    const values = data.phonePrefix
      ? {
          ...data,
          phone: data.phonePrefix + data.phone,
        }
      : data;

    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          onFinish();
        } else {
          throw new Error("Request failed");
        }
      })
      .catch(() => {
          if (typeof onError === "function"){
            onError();
          } else {
            showError();
          }
      })
      .finally(() => setIsLoading(false));
    */

    setTimeout(() => {
      setIsLoading(false);
      onFinish();
    }, 5000);
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      name="contact-form"
      onValuesChange={(changedValues, values: ContactData) => setData(values)}
      onFinish={sendContactRequest}
    >
      <Form.Item
        label={<FormattedMessage id="name" defaultMessage="Name" />}
        name="name"
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="nameRequired"
                defaultMessage="Please provide your name"
              />
            ),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={<FormattedMessage id="email" defaultMessage="Email address" />}
        name="email"
        rules={[
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
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={<FormattedMessage id="topic" defaultMessage="Topic" />}
        name="topic"
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="topicRequired"
                defaultMessage="Please select a topic"
              />
            ),
          },
        ]}
      >
        <Select>
          <Select.Option value="request">
            <FormattedMessage
              id="generalInquiry"
              defaultMessage="General inquiry"
            />
          </Select.Option>
          <Select.Option value="bug">
            <FormattedMessage id="bug" defaultMessage="Software error" />
          </Select.Option>
          <Select.Option value="recall">
            <FormattedMessage id="recall" defaultMessage="Recall" />
          </Select.Option>
        </Select>
      </Form.Item>
      {data?.topic === "recall" && (
        <Form.Item
          label={
            <FormattedMessage id="phoneNumber" defaultMessage="Phone Number" />
          }
          name="phone"
          rules={[
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
          ]}
        >
          <Input
            addonBefore={
              <Form.Item
                name="phonePrefix"
                noStyle
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="phoneNumberPrefix"
                        defaultMessage="Please provide the prefix of your country"
                      />
                    ),
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: 80 }}
                  filterOption={(input, option) => {
                    const prefix = option?.value.replace(/[+\s]*/g, "");
                    const search = input.replace(/[+\s]*/g, "");
                    return prefix.indexOf(search) > -1;
                  }}
                >
                  {phonePrefixes.map((prefix) => (
                    <Select.Option key={prefix} value={prefix}>
                      {prefix}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            }
            style={{ width: "100%" }}
          />
        </Form.Item>
      )}
      {data?.topic === "bug" && (
        <Form.Item
          label={
            <FormattedMessage
              id="versionNumber"
              defaultMessage="Version number"
            />
          }
          name="versionNumber"
          rules={[
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
          ]}
        >
          <Input />
        </Form.Item>
      )}
      <Form.Item
        label={
          <FormattedMessage id="description" defaultMessage="Description" />
        }
        name="description"
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="descriptionRequired"
                defaultMessage="Please provide a description"
              />
            ),
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6 }}>
        <Button
          type="primary"
          htmlType="submit"
          icon={isLoading ? <PoweroffOutlined /> : undefined}
          loading={isLoading}
        >
          <FormattedMessage
            tagName="span"
            id="submit"
            defaultMessage="Submit"
          />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
