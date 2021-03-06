import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { loadPlayers } from './modules/players';

store.dispatch(loadPlayers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>  
, document.getElementById('root'));
registerServiceWorker();
