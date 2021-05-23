import { Select, SelectProps } from "antd";
import { SelectValue } from "antd/lib/select";
import { FormattedMessage } from "react-intl";

const TopicSelect = (props: SelectProps<SelectValue>) => (
  <Select {...props} >
    <Select.Option value="request">
      <FormattedMessage id="generalInquiry" defaultMessage="General inquiry" />
    </Select.Option>
    <Select.Option value="bug">
      <FormattedMessage id="bug" defaultMessage="Software error" />
    </Select.Option>
    <Select.Option value="recall">
      <FormattedMessage id="recall" defaultMessage="Recall" />
    </Select.Option>
  </Select>
);

export default TopicSelect;
