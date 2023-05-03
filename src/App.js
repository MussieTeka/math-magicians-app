import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
