// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import AddProfit from './components/AddProfit';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-profit" element={<AddProfit />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
