import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import App from './components/app/App';
import { ToastContainer } from 'react-toastify';
import {store} from "./store/index";
import { fetchActionList, fetchActionPrice } from './store/api-actions';


const init = async () => {
  try {
    await store.dispatch(fetchActionList());
    await store.dispatch(fetchActionPrice("SBER"));

    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );

    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <ToastContainer/>
          <App />
        </Provider>
      </React.StrictMode>
    );

  } catch (error) {
    console.error('Initialization failed:', error);
  }
};
init();