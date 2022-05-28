import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Pocetna from "./components/Pocetna";
import Dodaj from "./components/Dodaj";
import Navigacija from "./components/Navigacija";
import Edit from "./components/Edit";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigacija />
    <Routes>
      <Route path="/" element={<Pocetna/>}/>
      <Route path="/dodaj" element={<Dodaj/>}/>
      <Route path="/edit/:EditID" element={<Edit/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
