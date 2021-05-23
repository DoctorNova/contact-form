import { PoweroffOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import { FormattedMessage } from "react-intl";

const SubmitButton = (props: ButtonProps) => {
  const icon = props.loading ? <PoweroffOutlined /> : undefined;

  return (
    <Button type="primary" htmlType="submit" icon={icon} {...props}>
      <FormattedMessage tagName="span" id="submit" defaultMessage="Submit" />
    </Button>
  );
};

export default SubmitButton;
