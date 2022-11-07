import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Container from './shared/Styles/Container';
import favicon from './images/logo.png';
import { AuthProvider } from './context/AuthContext';
import RoutesPaths from './navigate/RoutesPaths';
import { Background } from './shared/UI';

/* External dependencies */
import WebFont from 'webfontloader';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Helmet>
    {/* <title>Bill Tracker</title> */}
    <link rel="shorcut icon" href={favicon} type='image/x-icon' />
  </Helmet>
  <AuthProvider>
    <BrowserRouter>
      <Container>
        <RoutesPaths />
      </Container>
    </BrowserRouter>  
  </AuthProvider>
  <Background />
  </>
);
