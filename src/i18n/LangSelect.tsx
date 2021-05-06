import { Select } from "antd";
import "./LangSelect.scss";
import React, { useState } from "react";
import "antd/dist/antd.less";
import { getBrowserLang, Language, LANGUAGES } from "./I18nProvider";

export default function LangSelect({
  language,
  onChange,
}: {
  language: Language;
  onChange: (lang: Language) => void;
}) {
  return (
    <Select
      style={{ width: 150 }}
      bordered={false}
      defaultValue={language.code}
      onChange={(value) => {
        const lang = LANGUAGES.find((lang) => lang.code === value);
        onChange(lang || language);
      }}
    >
      {LANGUAGES.map((lang) => (
        <Select.Option key={lang.code} value={lang.code}>
          <div className="lang-select-option">
            <img src={lang.flag} alt="" />
            {lang.label}
          </div>
        </Select.Option>
      ))}
    </Select>
  );
}
