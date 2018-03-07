import React, { Component } from 'react';
import './App.css';
import avatar from './assets/images/samsung.gif';

// avatar is width 354px, height 354px
// web image width 305px, height 305px

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="albums">
          <div class="album">
            {/* <img class="album__artwork" src="https://source.unsplash.com/random/300x300?v=1"/> */}
            <img class="album__artwork" alt="" src={avatar}/>
            <div class="album__details">
              <h2>Album Title</h2>
              <p class="album__artist">Artist Name</p>
              <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
              <p class="album__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, excepturi!</p>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
