import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Login Page with nested routes for Login and Register */}
        <Route path="/login/*" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
