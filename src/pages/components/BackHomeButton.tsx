import { FormattedMessage } from "react-intl";
import LinkButton from "./LinkButton";
import React from "react";

export default function BackHomeButton() {
  return (
    <LinkButton type="primary" to="/">
      <FormattedMessage
        id="backHome"
        defaultMessage="Back Home"
      ></FormattedMessage>
    </LinkButton>
  );
}
