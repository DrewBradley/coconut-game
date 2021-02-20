import React, { Component } from 'react';
import Header from './Header';
import Board from './Board'
import shells from '../shell-data'
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      coconuts: shells.sort(() => Math.random() - 0.5),
      flipped: [],
      message: "Choose a Coconut"
    }
  }

  flipShell = (nut) => {
    this.setState({
      flipped: [...this.state.flipped, nut]
    })
  }

  componentDidUpdate() {
    this.findWinOrLose()
  }

  findWinOrLose = () => {
    this.state.flipped.length === 2 && this.resetGame()
    this.state.flipped.find(nut => nut.symbol === "💀") && this.resetGame()
  }

  resetGame = () => {
    setTimeout(() => {
      this.setState({
      coconuts: shells.sort(() => Math.random() - 0.5),
      flipped: []
      })
    }, 2000)  
  }
  
  render(){
    return (
      <section className="App">
        {this.state.flipped.find(nut => nut.symbol === "💀") && <Header message="YOU LOSE!!!"/> }
        
        {(this.state.flipped.length === 2) && (!this.state.flipped.find(nut => nut.symbol === "💀")) && <Header message="YOU WIN!!!"/>}
        
        {(this.state.flipped.length <= 1) && (!this.state.flipped.find(nut => nut.symbol === "💀")) && <Header message="Choose a Coconut!"/> }
        
        <Board nuts={this.state.coconuts} flipped={this.state.flipped} flipShell={ this.flipShell } />
      </section>
    )
  }
}

export default App;
