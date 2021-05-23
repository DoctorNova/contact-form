import { Form, message } from "antd";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import I18nProvider from "../../i18n/I18nProvider";
import FormItemDescription from "./form/FormItemDescription";
import FormItemEmail from "./form/FormItemEmail";
import FormItemName from "./form/FormItemName";
import FormItemPhoneNumber from "./form/FormItemPhoneNumber";
import FormItemSubmit from "./form/FormItemSubmit";
import FormItemTopic from "./form/FormItemTopic";
import FormItemVersionNumber from "./form/FormItemVersionNumber";

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

  const onValuesChange = (changedValues: any, values: ContactData) => setData(values);

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      name="contact-form"
      onValuesChange={onValuesChange}
      onFinish={sendContactRequest}
    >
      <FormItemName />
      <FormItemEmail />
      <FormItemTopic />
      {data?.topic === "recall" && <FormItemPhoneNumber />}
      {data?.topic === "bug" && <FormItemVersionNumber />}
      <FormItemDescription />
      <FormItemSubmit loading={isLoading} />
    </Form>
  );
};

export default ContactForm;
