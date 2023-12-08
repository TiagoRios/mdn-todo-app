import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import myReduxStore from './redux/store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
