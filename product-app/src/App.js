import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ProductCatalogue from './ProductCatalogue';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/catalogue" element={<ProductCatalogue />} />
      </Routes>
    </Router>
  );
};

export default App;
