import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from '../src/redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import GlobalStyle from 'styles/GlobalStyled';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="drinkmaster-teamproject">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalStyle />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
