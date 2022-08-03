import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { IntroLoading } from './components/IntroLoading.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <IntroLoading />
);

setTimeout(() => {
  root.render(
    <App />
  )
}, 5000)







