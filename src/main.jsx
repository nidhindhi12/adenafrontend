import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store/Store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import ToastProvider from './Store/Provider/ToastProvider.jsx';
import ProviderAuth from './Store/Provider/ProviderAuth.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ProviderAuth>
          <ToastProvider>
            <App />
          </ToastProvider>
        </ProviderAuth>
      </Provider>
    </BrowserRouter>
  // </StrictMode>
)
