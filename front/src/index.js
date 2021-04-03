import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import configureStore from './store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/lib/integration/react";

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);