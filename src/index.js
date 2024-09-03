import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.css'
import ContextProvider from './context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

//Summary
/* Wrapping App with ContextProvider makes the context available to the entire component tree within App.

This setup allows for global state management and avoids the need for prop drilling.

Components inside App can access and use the context values and functions via the useContext hook. */
