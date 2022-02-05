import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Info from '../src/components/Info'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Info />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
