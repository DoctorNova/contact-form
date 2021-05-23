import { Card } from "antd";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Page from "./Page";
import "./ContactPage.scss";
import ContactForm from "./components/ContactForm";
import Success from "./components/results/Success";
import ServerError from "./components/results/ServerError";

const title = (
  <FormattedMessage id="contactFromTitle" defaultMessage="Contact Us" />
);

export default function ContactPage() {
  const [state, setState] = useState<"form" | "done" | "error">("form");

  return (
    <Page>
      <Card className="contact-card" title={title}>
        {state === "form" && (
          <ContactForm
            onFinish={() => setState("done")}
            onError={() => setState("error")}
          />
        )}
        {state === "error" && <ServerError />}
        {state === "done" && <Success />}
      </Card>
    </Page>
  );
}
