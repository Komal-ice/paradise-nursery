import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the Provider component from react-redux
import { Provider } from 'react-redux';

// Import the Redux store you configured
import store from './redux/store';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Wrap your App component with the Provider and pass the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Optionally, you can include reportWebVitals to log performance metrics
reportWebVitals();
