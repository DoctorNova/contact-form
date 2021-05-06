import React, { useState } from 'react';
import I18nProvider, { getBrowserLang } from './i18n/I18nProvider';
import { Layout } from 'antd';
import "antd/dist/antd.less";
import AppHeader from './header/Header';
import { BrowserRouter  } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

function App() {
  const [activeLang, setActiveLang] = useState(getBrowserLang());

  return (
    <I18nProvider locale={activeLang}>
      <BrowserRouter>
        <Layout>
          <Header><AppHeader language={activeLang} onLangChange={(lang) => setActiveLang(lang) } /></Header>
          <Content>

          </Content>
          <Footer></Footer>
        </Layout>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
