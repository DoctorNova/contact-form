import React from 'react';
import I18nProvider from './i18n/I18nProvider';
import { Layout } from 'antd';
import "antd/dist/antd.less";
import AppHeader from './header/Header';
import { BrowserRouter  } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <I18nProvider>
      <BrowserRouter>
        <Layout>
          <Header><AppHeader/></Header>
          <Content>
            
          </Content>
          <Footer></Footer>
        </Layout>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
