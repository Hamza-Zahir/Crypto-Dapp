// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
// import ReactDOM from "react-dom";
// import createRoot from 'react-dom/client';
import "./index.scss";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


import {TransactionProvider} from "./contexts/TransactionContext";

// ReactDOM.render(
//   <TransactionProvider>
//     <App />
//   </TransactionProvider>,
//   document.getElementById("root")
// );
//tab="home"
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <TransactionProvider>
<App  />

</TransactionProvider>
);