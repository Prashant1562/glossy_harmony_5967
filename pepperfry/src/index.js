import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import  { ThemeProvider } from "styled-components";
import theme from "./Utils/theme"
 import { store } from './Redux/store';


import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import {store} from './Admin_Side/Redux/store'
// import { ChakraProvider } from '@chakra-ui/react/dist';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store = {store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


