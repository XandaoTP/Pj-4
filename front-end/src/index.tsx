import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { GlobalCss } from './assetes/css/global';
import store  from './store/store';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const payPalOptions = {
  'client-id': 'ASzMql5a2jijlgZ9L_3Kt7Cpf38GTSMmcbvz6Id6b9ZIQWgkdwQVOuE0NN2lKfls7UkFCAkPA4senvkh',
  currency: 'BRL'
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider options={payPalOptions}>
        <BrowserRouter>
          <GlobalCss />
          <App />
          <ToastContainer />
        </BrowserRouter>
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

