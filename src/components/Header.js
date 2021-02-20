import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1 className="title">Coconuts</h1>
      <p>FIND THE 😃</p>
      <p>BEWARE THE 💀</p>
      <p className="win-lose-announcement">{props.message}</p>
    </header>
  )
}

export default Header