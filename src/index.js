// import React, { StrictMode } from 'react';
import App from './App';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('root') // as HTMLElement;
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);