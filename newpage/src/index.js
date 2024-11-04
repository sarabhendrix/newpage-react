import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import AddBook from "./pages/addbook";
import Analytics from "./pages/analytics";
import Browse from "./pages/browse";
import Discussion from "./pages/discussion";
import Home from "./pages/home";
import MyBooks from "./pages/mybooks";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
