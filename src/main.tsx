import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root'),
);
