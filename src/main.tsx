import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/pages/Home/Home.tsx';
import Logos from './components/layout/Logos.tsx';
import Frame from './components/layout/Frame.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Logos />
    <Frame />
    <Home />
  </StrictMode>,
);
