import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App/App';
import { uiReducer } from './reducers/uiReducer';
import { Provider } from 'react-redux';

const store = createStore(uiReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
