import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.css';
import './styles/nav-hero.css';
import './styles/sections-1.css';
import './styles/sections-2.css';
import './styles/contact-footer.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
