import React from 'react';
import './HomePage.scss';

import AboutCard from '../../components/CardComponet/AboutCard';

const HomePage = () => {
  return (
    <div className="page-body">
      <div className="hero">
        <h1>Hi my name is Adonis and I'm a Software Engineer </h1>
      </div>
      <div className="about-section">
        <AboutCard />
      </div>
    </div>
  );
};

export default HomePage;
