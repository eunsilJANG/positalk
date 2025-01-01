import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import App from './App';
import Trans from './page/Trans';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/main.css';

// React.StrictMode를 활성화하는 것이 좋습니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/trans" element={<Trans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
