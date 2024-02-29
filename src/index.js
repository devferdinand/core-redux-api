import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/App.js';
// Import 'store' here.

const root = createRoot(document.getElementById('root'));
const render = () => {
  // Pass `state` and `dispatch` props to <App />
  root.render(
    <App 

    />,
  )
}
render();
// Subscribe render to changes to the `store`
