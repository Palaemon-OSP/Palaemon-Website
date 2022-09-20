import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import Docs from './Docs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/docs" element={<Docs />}></Route>
    </Routes>
  );
};

export default App;
