import React from 'react';

import Routes from './config/routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <Routes />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
