import React from 'react';
import avatar from './assets/images/samsung.gif';

// avatar is width 354px, height 354px
// web image width 305px, height 305px

const Avatar = () => (
  <div className="albums">
    <div className="album">
      {/* <img class="album__artwork" src="https://source.unsplash.com/random/300x300?v=1"/> */}
      <img className="album__artwork" alt="" src={avatar} />
      <div className="album__details">
        <h2>Album Title</h2>
        <p className="album__artist">Artist Name</p>
        <p className="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
        <p className="album__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, excepturi!</p>
      </div>
    </div>
  </div>
);

export default Avatar;
