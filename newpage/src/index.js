import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import AddBook from "./pages/addbook";
import Analytics from "./pages/analytics";
import Browse from "./pages/browse";
import Discussion from "./pages/discussion";
import Home from "./pages/home";
import MyBooks from "./pages/mybooks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mybooks" element={<MyBooks />} />
          <Route path="browse" element={<Browse />} />
          <Route path="addbook" element={<AddBook />} />
          <Route path="discussion" element={<Discussion />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
