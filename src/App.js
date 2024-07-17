// To use the LayOut component with Outlet, ensure your App component imports and uses it correctly within your Router setup.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayOut from './LayOut'; // Assuming LayOut is in the same directory
import HomePage from './HomePage/HomePage.js';
import AboutPage from './AboutPage/AboutPage.js';
import LoginPage from './Auth/loginPage/LoginPage.js';
// import Home from './Home'; // Your home component
// import About from './About'; // Your about component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;