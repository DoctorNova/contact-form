import { Result } from "antd";
import { FormattedMessage } from "react-intl";
import BackHomeButton from "../BackHomeButton";

const subTitle = (
  <FormattedMessage
    id="contacPageError"
    defaultMessage="Sorry, something went wrong."
  />
);
const extra = <BackHomeButton />;

const ServerError = () => (
  <Result status="500" title="500" subTitle={subTitle} extra={extra} />
);

export default ServerError;