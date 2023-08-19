// import React from 'react';
// import { createRoot } from 'react-dom';
// import App from './App.jsx';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
// root.render(<App />);

import React from 'react';
import { render } from 'react-dom';
import './styles.css';
//import { BrowserRouter } from 'react-router-dom';
import App from './App';

render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
  <App />,
  document.getElementById('root')
);