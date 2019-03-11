import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';

const store = configureStore();

render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root'),
);
serviceWorker.unregister();
