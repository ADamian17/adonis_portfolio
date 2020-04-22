import React from 'react';

import Routes from './config/routes';
import Navbar from './components/Navbar/Navbar';

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
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
