import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/index';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

