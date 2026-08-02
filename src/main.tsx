import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/pages/Home/Home.tsx';
import Header from './components/layout/Header.tsx';
import Frame from './components/layout/Frame.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Frame />
    <Home />
  </StrictMode>,
);
