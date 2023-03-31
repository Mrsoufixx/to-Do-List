import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore } from "redux";
import ReducerTask from "./redux/reducers/ReducerTask";
import { Provider } from 'react-redux';


const store=legacy_createStore(ReducerTask)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

