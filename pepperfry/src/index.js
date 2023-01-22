import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import {store} from './Admin_Side/Redux/store'
// import { ChakraProvider } from '@chakra-ui/react/dist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <App />
  </React.StrictMode>

);

root.render(
      <App />
);
