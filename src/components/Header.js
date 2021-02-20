import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1 className="title">Coconuts</h1>
      <p>BEWARE THE 💀</p>
      <p className="win-lose-announcement">{props.message}</p>
      <button className="new-game-btn">New Game</button>
    </header>
  )
}

export default Header