import { createRoot } from 'react-dom/client';

import { App } from './App';

const root = document.getElementById('root');

if (!root) {
  throw new TypeError('The root is not found in the index.html!');
}

createRoot(root).render(<App />);
