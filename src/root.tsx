import React = require('react');
import { render } from 'react-dom';

// Redux

// Passes store to all container components
import { Provider } from 'react-redux';

// 
import { createStore } from 'redux';

// Reducer
import { App as AppReducer } from './reducers/reducer';

import { initialState } from './reducers/initial-state';
import App from './components/App';

// CSS import
import './stylesheets/styles.scss';

const store = createStore(AppReducer, initialState);

render(
  <Provider store={store} >
    <App /> 
  </Provider>,
  document.getElementById('app')
);