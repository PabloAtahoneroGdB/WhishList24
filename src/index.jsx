import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
// Root es la raiz de la aplicación que se monta en el div#root
const root = createRoot(container);

// renderiza algo en la raiz de la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

);

// const algo = 'a'
