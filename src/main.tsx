import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.less';
import Home from './Home/Home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
