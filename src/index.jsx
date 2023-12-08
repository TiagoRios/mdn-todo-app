import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import myReduxStore from './redux/store';

import './index.css';
import App from './App';

// const DATA = [
//   { id: 'todo-0', name: 'Eat', completed: true },
//   { id: 'todo-1', name: 'Sleep', completed: false },
//   { id: 'todo-2', name: 'Repeat', completed: false },
// ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myReduxStore}>
      {/* <App tasks={DATA} /> */}
      <App />
    </Provider>
  </React.StrictMode>,
);
