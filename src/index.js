import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import SingleMail from './pages/Mail/Mail'
import GlobalStyle from "./theme/globalStyles";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="mail" element={<SingleMail />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
