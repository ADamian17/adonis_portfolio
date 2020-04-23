import React from 'react';

import './Card.Style.scss';

const CardComponent = (props) => {
  return (
    <div className="card">
      <div className="image-holder">{/* <img src={img1} alt="avatar" /> */}</div>
      <div className="text-holder">
        <p></p>
      </div>
    </div>
  );
};

export default CardComponent;
