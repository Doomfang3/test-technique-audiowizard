import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import FirstVisitContextProvider from './contexts/FirstVisitContext';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <FirstVisitContextProvider>
    <App />
  </FirstVisitContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
