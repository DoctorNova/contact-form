import { IntlProvider } from 'react-intl';
import React from 'react';
import messages_en from "./translations/en.json";
import messages_de from "./translations/de.json";
import { ConfigProvider } from 'antd';
import antdDe from 'antd/lib/locale/de_DE';
import antdEn from 'antd/lib/locale/en_US';

const defaultLocale = "en";

const TRANSLATIONS = {
    "en": {
        messages: messages_en,
        antd: antdEn,
    },
    "de": {
        messages: messages_de,
        antd: antdDe
    }
} as const;

export type LangCode = keyof typeof TRANSLATIONS;

export const getBrowserLangCode = () => {
    const browserLocale = Array.isArray(navigator.language) ? navigator.language[0] : defaultLocale;
    return browserLocale.split(/-|_/)[0];
}

export default function I18nProvider( props: {children: React.ReactNode, locale?: LangCode} ) {
    const locale: LangCode = props.locale ?? getBrowserLangCode();
    const translation = TRANSLATIONS[locale] ?? TRANSLATIONS[defaultLocale];

    return (
        <IntlProvider messages={translation.messages} locale={locale} defaultLocale={defaultLocale}>
            <ConfigProvider locale={translation.antd}>
                { props.children }
            </ConfigProvider>
        </IntlProvider>
    )
}