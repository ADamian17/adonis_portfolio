import React from 'react';
import styled from 'styled-components';

import './HomePage.scss';

import CardComponent from '../../components/CardComponet/Card.Componet';

const HomePage = () => {
  return (
    <div className="page-body">
      <div className="hero">Hi my name is adonis and I am a Software Engineer</div>
      <div className="about-section">
        <CardComponent />
      </div>
    </div>
  );
};

export default HomePage;
