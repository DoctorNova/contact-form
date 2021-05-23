import { Result } from "antd";
import { FormattedMessage } from "react-intl";
import BackHomeButton from "../BackHomeButton";

const title = (
  <FormattedMessage
    id="successfullySendContactForm"
    defaultMessage="Thank you for getting in touch."
  />
);
const extra = <BackHomeButton />;

const Success = () => <Result status="success" title={title} extra={extra} />;

export default Success;
