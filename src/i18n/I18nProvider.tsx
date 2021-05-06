import { FormattedMessage, IntlProvider } from 'react-intl';
import React from 'react';
import messages_en from "./translations/en.json";
import messages_de from "./translations/de.json";
import { ConfigProvider } from 'antd';
import antdDe from 'antd/lib/locale/de_DE';
import antdEn from 'antd/lib/locale/en_US';
import deFlag from './flags/de.svg';
import enFlag from './flags/en.svg';
import { Locale } from 'antd/lib/locale-provider';

const defaultLocale = "en";

export interface Language {
    code: string,
    flag: string,
    label: React.ReactNode | string,
    messages: Record<string, string>,
    antd: Locale
};

export const LANGUAGES: Language[] = [
    {
        code: "en",
        flag: enFlag,
        label: <FormattedMessage id="en" defaultMessage="English"></FormattedMessage>,
        messages: messages_en,
        antd: antdEn,
    },
    {
        code: "de",
        flag: deFlag,
        label: <FormattedMessage id="de" defaultMessage="German"></FormattedMessage>,
        messages: messages_de,
        antd: antdDe
    }
];

const getBrowserLangCode = () => {
    const browserLocale = Array.isArray(navigator.language) ? navigator.language[0] : defaultLocale;
    return browserLocale.split(/-|_/)[0];
}

export const getBrowserLang: () => Language = () => {
    const lang = getBrowserLangCode();
    return LANGUAGES.find(l => l.code === lang) ?? LANGUAGES[0];
};

export default function I18nProvider( props: {children: React.ReactNode, locale?: Language} ) {
    const locale = props.locale ?? getBrowserLangCode();
    const translation = LANGUAGES.find(lang => lang.code === locale.code) ?? LANGUAGES[0];

    return (
        <IntlProvider messages={translation.messages} locale={locale.code} defaultLocale={defaultLocale}>
            <ConfigProvider locale={translation.antd}>
                { props.children }
            </ConfigProvider>
        </IntlProvider>
    )
}