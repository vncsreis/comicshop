import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Router from './router';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>,

  document.getElementById('root'),
);
