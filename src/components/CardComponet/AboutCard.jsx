import React from 'react';

import './AboutCard.scss';

import { ABOUT_ME } from '../../utils/projectData';
import img from './assets/todayP.jpg';

const AboutCard = () => {
  return (
    <div className="card_container">
      <div className="image-holder">
        <img src={img} alt="avatar" />
      </div>
      <div className="text-holder">
        <p>
          <h1>About me</h1>
          <br />
          {ABOUT_ME}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
