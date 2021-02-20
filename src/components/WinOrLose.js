import React from 'react';

const WinOrLose = (props) => {
  return (
    <section className="win-lose"> 
      <p className="win-lose-announcement">{props.message}</p>
    </section> 
  )
}

export default WinOrLose