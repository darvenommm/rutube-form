import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { App } from '@/app/App';

const root = document.getElementById('root');

if (!root) {
  throw new TypeError('The root is not found in the index.html!');
}

createRoot(root).render(
  <StrictMode>
    <App />,
  </StrictMode>,
);
