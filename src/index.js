import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './Components/App';
import moviesReducer from './reducers/index'


const store = createStore(moviesReducer);

// console.log('beforeState', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: { hello: 'world' }
// })


// console.log('aftersstate', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

