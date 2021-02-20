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
      coconuts: shells,
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
    if (this.state.flipped.find(nut => nut.symbol === "💀")) {
      return this.updateMessage('YOU LOSE!')
    } else if (this.state.flipped.length === 2){
      return this.updateMessage("YOU WIN!")
    }
  }

  updateMessage = (words) => {
    this.setState({ message: words })
  }
  
  render(){
    return (
      <section className="App">
        <Header message={this.state.message}/>
        <Board nuts={this.state.coconuts} flipped={this.state.flipped} flipShell={ this.flipShell } />
      </section>
    )
  }
}

export default App;
