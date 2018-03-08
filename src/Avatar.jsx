import React from 'react';
import avatar from './assets/images/samsung1.gif';
import avatar1 from './assets/images/samsung.gif';
import './Avatar.css';
// avatar is width 354px, height 354px
// web image width 305px, height 305px

const Avatar = () => (
  <div className="albums">
    <div className="album">
      <img className="album__artwork" alt="" src={avatar} />
      <img className="album__artwork" alt="" src={avatar1} />
      <img className="album__artwork" alt="" src={avatar} />
      <img className="album__artwork" alt="" src={avatar1} />
      <img className="album__artwork" alt="" src={avatar} />
      <img className="album__artwork" alt="" src={avatar1} />
    </div>
  </div>
);

export default Avatar;
