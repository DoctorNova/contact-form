import { Select, SelectProps } from "antd";
import { SelectValue } from "antd/lib/select";
import { OptionData, OptionGroupData } from "rc-select/lib/interface/index";
import { prefixes as phonePrefixes } from "../../i18n/phone/PhoneNumberPrefixes";

const STYLE = {
    width: 80
};

const OPTIONS = phonePrefixes.map((prefix) => (
  <Select.Option key={prefix} value={prefix}>
    {prefix}
  </Select.Option>
));

const filterOption = (inputValue: string, option: OptionData | OptionGroupData | undefined) => {
  if (typeof option?.value === "string") {
    const prefix = option?.value.replace(/[+\s]*/g, "");
    const search = inputValue.replace(/[+\s]*/g, "");
    return prefix.indexOf(search) > -1;
  }

  return false;
};

/**
 * A select box for the user to select the phone number prefix for his country.
 * @returns React component
 */
const PhoneNumberPrefix = (props: SelectProps<SelectValue>) => (
  <Select showSearch style={STYLE} filterOption={filterOption} {...props}>
    {OPTIONS}
  </Select>
);

export default PhoneNumberPrefix;
