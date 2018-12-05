import React, { Component } from 'react';
import SongBox from './containers/SongBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>itunes library</h2>
        <SongBox />
      </div>
    );
  }
}

export default App;
