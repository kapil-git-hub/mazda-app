import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/PostReducer.jsx';
import HomePage from './pages/HomePage.jsx'

const store = createStore(postReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);