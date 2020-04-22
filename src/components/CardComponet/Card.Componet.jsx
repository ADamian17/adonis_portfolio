import React from 'react';

import './Card.Style.scss';

import img1 from './todayP.jpg';

const CardComponent = (props) => {
  return (
    <div className="card">
      <div className="image-holder">
        <img src={img1} alt="avatar" />
      </div>
      <div className="text-holder">
        <p>
          Hola! I’m Adonis Martin, a classically trained Ballet and Modern dancer turned full-stack
          engineer born and raised in Contramaestre, Cuba. Although I’ve taken my last bow, I danced
          professionally for 11 years. That training is the foundation of my career, and the same
          skills that helped me succeed on stage are the ones that lead me to my second act as a
          developer. I love collaborating with a team, thinking of innovative ways to strategize and
          bring something to life. I love learning and exploring, tackling challenges both physical
          and mental. At my core, I’m a creator, infusing my passion and energy into every project.
          My culture is important to me -- while this means I’m bilingual (proficient in English and
          Spanish), it also means that dance and music are in my blood. You can usually find me
          grooving to Bad bunny(reggaeton artists) while I’m working, and my creative background
          brings a fresh perspective. I’d love to connect with people and companies building great
          things. Feel free to reach out at adonisdesuvikdo@gmail.com or (510)-987-6466.
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
