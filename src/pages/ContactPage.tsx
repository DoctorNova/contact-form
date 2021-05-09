import { Card, Result } from "antd";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Page from "./Page";
import "./ContactPage.scss";
import ContactForm from "./components/ContactForm";
import BackHomeButton from "./components/BackHomeButton";

export default function ContactPage() {
  const [state, setState] = useState<"form" | "done" | "error">("form");

  return (
    <Page>
      <Card
        className="contact-card"
        title={
          <FormattedMessage id="contactFromTitle" defaultMessage="Contact Us" />
        }
      >
        {state === "form" && (
          <ContactForm
            onFinish={() => setState("done")}
            onError={() => setState("error")}
          />
        )}
        {state === "error" && (
          <Result
            status="500"
            title="500"
            subTitle={
              <FormattedMessage
                id="contacPageError"
                defaultMessage="Sorry, something went wrong."
              />
            }
            extra={
              <BackHomeButton />
            }
          />
        )}
        {state === "done" && (
          <Result
            status="success"
            title={<FormattedMessage id="successfullySendContactForm" defaultMessage="Thank you for getting in touch."/>}
            extra={<BackHomeButton />}
          />
        )}
      </Card>
    </Page>
  );
}
