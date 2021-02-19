import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { authInfoSuccess } from './ducks/auth.duck';
import firebase from './firebase-config';
import './index.css';
import routeConfiguration from './routeConfiguration';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

const store = configureStore({}, firebase);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch(authInfoSuccess(user));
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes routes={routeConfiguration()}/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
