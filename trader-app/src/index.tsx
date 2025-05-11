import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import App from './components/app/App';
import { ToastContainer } from 'react-toastify';
import {store} from "./store/index";
import { fetchActionList } from './store/api-actions';


store.dispatch(fetchActionList());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>
);
