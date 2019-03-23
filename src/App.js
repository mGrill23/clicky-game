import React, { Component } from 'react';
import './App.scss';
import nav from './components/Navbar';
import game from './components/Game';

class App extends Component {
  render() {
    return (
      nav,
      game
    );
  }
}

export default App;
