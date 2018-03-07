import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="albums">
          <div class="album">
            <img class="album__artwork" src="https://source.unsplash.com/random/300x300?v=1"/>
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
